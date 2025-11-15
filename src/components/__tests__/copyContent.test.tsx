import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CopyContent from "../copyContent";

describe("CopyContent", () => {
  let originalClipboard: Clipboard | undefined;
  let writeTextMock: jest.Mock;

  beforeAll(() => {
    originalClipboard = navigator.clipboard;
  });

  beforeEach(() => {
    jest.useFakeTimers();
    writeTextMock = jest.fn();

    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: writeTextMock },
      configurable: true,
    });
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.clearAllMocks();

    if (originalClipboard) {
      Object.defineProperty(navigator, "clipboard", {
        value: originalClipboard,
        configurable: true,
      });
    } else {
      delete (navigator as Record<string, unknown>).clipboard;
    }
  });

  it("copies the content on click and toggles the success icon", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const sampleContent = "copy me";
    const { container } = render(<CopyContent content={sampleContent} />);

    const button = screen.getByRole("button", { name: /copy content/i });
    const initialIcon = container.querySelector("svg");

    expect(initialIcon).not.toBeNull();
    expect(initialIcon?.classList.contains("text-white/80")).toBe(true);

    await user.click(button);

    expect(writeTextMock).toHaveBeenCalledWith(sampleContent);

    const copiedIcon = container.querySelector("svg");
    expect(copiedIcon).not.toBeNull();
    expect(copiedIcon?.classList.contains("text-green-400")).toBe(true);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    const resetIcon = container.querySelector("svg");
    expect(resetIcon).not.toBeNull();
    expect(resetIcon?.classList.contains("text-white/80")).toBe(true);
  });

  it("supports copying via keyboard interactions", async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const sampleContent = "keyboard copy";
    const { container } = render(<CopyContent content={sampleContent} />);

    const button = screen.getByRole("button", { name: /copy content/i });

    button.focus();
    await user.keyboard("{Enter}");

    expect(writeTextMock).toHaveBeenCalledWith(sampleContent);
    expect(container.querySelector("svg")?.classList.contains("text-green-400"))
      .toBe(true);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(container.querySelector("svg")?.classList.contains("text-white/80"))
      .toBe(true);

    button.focus();
    await user.keyboard(" ");

    expect(writeTextMock).toHaveBeenCalledTimes(2);
    expect(container.querySelector("svg")?.classList.contains("text-green-400"))
      .toBe(true);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(container.querySelector("svg")?.classList.contains("text-white/80"))
      .toBe(true);
  });
});
