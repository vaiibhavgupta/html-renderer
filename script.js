window.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const renderButton = document.getElementById('renderButton');
    const preview = document.getElementById('preview');

    renderButton.addEventListener('click', renderOutput);

    function renderOutput() {
        // console.log()
        const htmlCode = editor.value;
        preview.innerHTML = htmlCode;
    }
});