
    let inputNewAssignment = document.querySelector("#inputNewAssignment");
    let btnAddAssignment = document.querySelector("#btnAddAssignment");
    let listAssignment = document.querySelector("#listAssignment");
    let windowEdition = document.querySelector("#windowsEdition");
    let windowEditionBg = document.querySelector("#windowsEditionBg");
    let windowEditionBtnClose = document.querySelector("#windowEditionBtnClose");
    let btnRefreshAssignment = document.querySelector("#btnRefreshAssignment");
    let idAssignmentEdition = document.querySelector("#idAssignmentEdition");
    let inputAssignmentNameEdition = document.querySelector("#inputAssignmentNameEdition");

    windowEditionBtnClose.addEventListener("click",(e) => {
        alternarJanelaEdicao();
    });

    function alternarJanelaEdicao(){
        windowEdition.classList.toggle("open");
        windowEditionBg.classList.toggle("open");
    }

    btnRefreshAssignment.addEventListener("click", (e) => {
        e.preventDefault();
        let idAssignment = idAssignmentEdition.innerHTML.replace('#','');
        let Assignment = {
            nome: inputAssignmentNameEdition.value,
            id: idAssignment,
        }

        let AssignmentActual = document.getElementById(""+idAssignment+"");

        if(AssignmentActual){
            let li = createTagLi(Assignment);
            listAssignment.replaceChild(li, AssignmentActual);
            alternarJanelaEdicao();
        }
        else{
            alert("Elemento HTML não encontrado");
        }

        
    });

    inputNewAssignment.addEventListener("keypress", (el) => {

        if(el.keyCode == 13){
            let Assignment = {
                nome: inputNewAssignment.value,
                id: generateId(),
            }

            if(inputNewAssignment.value == ''){

            }
            else {
                addAssignment(Assignment);
            }
        }

    });

    btnAddAssignment.addEventListener("click", (e) => {
        let Assignment = {
            nome: inputNewAssignment.value,
            id: generateId(),
        }
        if(inputNewAssignment.value == ''){
    
        }
        else {
            addAssignment(Assignment);
        }
    });

    function generateId(){
        return Math.floor(Math.random() * 3000);
    }

    function addAssignment(Assignment){
        let li = createTagLi(Assignment);
        listAssignment.appendChild(li);
        inputNewAssignment.value = '';
    }

    function createTagLi(Assignment){

        let li = document.createElement("li");
        li.id = Assignment.id;

        let span = document.createElement("span");
        let textAssignment = span.classList.add("textAssignment");

        span.innerHTML = Assignment.nome;

        let div = document.createElement("div");

        let btnEdit = document.createElement("button");
        btnEdit.classList.add("btnAcao");
        btnEdit.innerHTML = "<i class='fa fa-pencil'></i>";
        btnEdit.setAttribute('onclick','edit('+Assignment.id+')');

        let btnRemove = document.createElement("button");
        btnRemove.classList.add("btnAcao");
        btnRemove.innerHTML = "<i class='fa fa-trash'></i>";
        btnRemove.setAttribute('onclick','remove('+Assignment.id+')');

        div.appendChild(btnEdit);
        div.appendChild(btnRemove);

        li.appendChild(span);
        li.appendChild(div);

        return li;
    }

    function edit(idAssignment){
        let li = document.getElementById('' + idAssignment + '');
        if(li){
            idAssignmentEdition.innerHTML = '#' + idAssignment;
            inputAssignmentNameEdition.value = li.innerText;
            alternarJanelaEdicao();
        } else{
            alert("Elemento HTML não encontrado");
        }
    }

    function remove(idAssignment){
        let confirmation = window.confirm("Tem certeza que deseja excluir");
        if(confirmation){
            let li = document.getElementById('' + idAssignment + '');
            if(li){
                listAssignment.removeChild(li);
            } else{
                alert("Elemento HTML não encontrado");
            }
        }
    }