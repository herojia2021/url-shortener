const btn = document.querySelector("#copyBtn")
const url = document.querySelector("#shortUrl")
btn.addEventListener("click", (e) => {
  copyToClipboard(url.innerText)
  alert("網址複制成功!!")
})

function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    //Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData("Text", text)
  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea")
    textarea.textContent = text
    textarea.style.position = "fixed" // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea)
    textarea.select()
    try {
      return document.execCommand("copy") // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex)
      return false
    } finally {
      document.body.removeChild(textarea)
    }
  }
}
