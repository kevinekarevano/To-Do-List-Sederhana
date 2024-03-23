const inputText = document.getElementById("input"); // menangkap element input text
const addButton = document.getElementById("btn"); // menangka element button 'add'

addButton.addEventListener("click", () => {
  // menambahkan event kepada button add jika di klik

  // menambahkan kondisi if
  if (inputText.value == "") {
    // jika value dari inpuText kosong, maka akan memunculkan alert
    alert("Nama To Do-List wajib di isi");
  } else {
    // jika tidak maka..

    const ul = document.getElementById("ul"); // menangkap element dengan id ul

    // Mmebuat variabel list
    const list = (ul.innerHTML += `<li id="list" class="mb-5 flex gap-2 justify-between items-cente">
      <div class="flex gap-3">
        <input type="checkbox" name="" id="check">
        <p class="overflow-hidden">${inputText.value}</p>
      </div>
      
      <button id="btn-close" class="tombol bg-red-500 px-2 rounded-md text-white">X</button>
    </li>`);

    ul.innerHTML = list;

    

    inputText.value = "";
    inputText.focus();

    const checkBox = document.querySelectorAll("#check");

    for (let i = 0; i < checkBox.length; i++) {
      const checkBoxB = checkBox[i];
      console.log(checkBox);

      checkBoxB.addEventListener("change", () => {
        const p = checkBoxB.nextElementSibling;
        p.classList.toggle("line-through");
      });
    }

    const btnClose = document.querySelectorAll(".tombol");
    for (let i = 0; i < btnClose.length; i++) {
      const bntCloseB = btnClose[i];

      bntCloseB.addEventListener("click", () => {
        const parentLi = bntCloseB.parentNode;
        parentLi.remove();
      });
    }
  }
});
