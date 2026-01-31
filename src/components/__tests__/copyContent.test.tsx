import { act, fireEvent, render, screen } from "@testing-library/react";

import CopyContent from "../copyContent";

describe("CopyContent", () => {
  let originalClipboard: Clipboard | undefined;
  let writeTextMock: jest.Mock;

  beforeAll(() => {
    originalClipboard = navigator.clipboard;
  });

  beforeEach(() => {
    jest.useFakeTimers();

    const clipboard = {
      writeText: async () => {},
    };

    Object.defineProperty(window.navigator, "clipboard", {
      value: clipboard,
      configurable: true,
    });

    writeTextMock = jest
      .spyOn(clipboard, "writeText")
      .mockResolvedValue(undefined as unknown as void);
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
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
    const sampleContent = "copy me";
    const { container } = render(<CopyContent content={sampleContent} />);

    const button = screen.getByRole("button", { name: /copy content/i });
    const initialIcon = container.querySelector("svg");

    expect(initialIcon).not.toBeNull();
    expect(initialIcon?.classList.contains("text-white/80")).toBe(true);

    act(() => {
      fireEvent.click(button);
    });

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
    const sampleContent = "keyboard copy";
    const { container } = render(<CopyContent content={sampleContent} />);

    const button = screen.getByRole("button", { name: /copy content/i });

    button.focus();
    act(() => {
      fireEvent.keyDown(button, { key: "Enter" });
    });

    expect(writeTextMock).toHaveBeenCalledWith(sampleContent);
    expect(container.querySelector("svg")?.classList.contains("text-green-400"))
      .toBe(true);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(container.querySelector("svg")?.classList.contains("text-white/80"))
      .toBe(true);

    button.focus();
    act(() => {
      fireEvent.keyDown(button, { key: " " });
    });

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
