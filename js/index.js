console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");
document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");
  const submitButton = document.getElementById("submit-comment");

  submitButton.addEventListener("click", function () {
    const commentText = commentInput.value;
    if (commentText === "") {
      alert("댓글을 입력해주세요.");
      return;
    }
    alert("댓글이등록되었습니다.");

    const commentItem = document.createElement("li");
    commentItem.classList.add("comment-item");
    commentItem.innerHTML = `<p>${commentText}</p>`;
    
    commentList.appendChild(commentItem);
    commentInput.value = "";
  });
});
