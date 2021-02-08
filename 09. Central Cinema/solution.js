function solve() {
    const formElements = document.querySelector('#container').children;
    const inputs = Array.from(formElements).slice(0, formElements.length - 1);
    const onScreenBtn = Array.from(formElements).slice(formElements.length - 1)[0];
    let moviesSection = document.querySelector('#movies').children[1];
    let archiveSection = document.querySelector('#archive').children[1];
    const onClearBtn = document.querySelector('#archive button');

    function clearInputs() {
        Array.from(inputs)
            .forEach(i => i.value = '');
    }

    function removeElements(inputParrent) {
        inputParrent.querySelector('div').remove();
        Array.from(inputParrent.querySelectorAll('strong'))
            .forEach(r => r.remove())
        return inputParrent;
    }

    function removeArchive(ev) {
        console.log('removeArchive')
        ev.target.parentNode.parentNode.removeChild(ev.target.parentNode)
    }

    function archive(ev) {
        console.log('archive')
        let input = ev.target.parentNode.querySelector('input').value;
        let inputParrent = ev.target.parentNode.parentNode;
        if (input.length > 0 && Number.isInteger(parseInt(input))) {
            let result = Number(ev.target.parentNode.querySelector('strong').textContent) * Number(input);
            let strongResult = document.createElement('strong');
            strongResult.textContent = `Total amount: ${result.toFixed(2)}`;

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Delete';
            removeButton.addEventListener('click', removeArchive)

            moviesSection.removeChild(inputParrent);

            inputParrent = removeElements(inputParrent);
            inputParrent.appendChild(strongResult);
            inputParrent.appendChild(removeButton);


            archiveSection.appendChild(inputParrent);


        }


    }

    function createMovieArticle(name, hall, price) {
        let spanMovieName = document.createElement('span');
        spanMovieName.textContent = name;

        let strongHall = document.createElement('strong');
        strongHall.textContent = `Hall: ${hall}`;

        let strongPrice = document.createElement('strong');
        strongPrice.textContent = Number(price).toFixed(2);

        let inputPrice = document.createElement('input');
        inputPrice.placeholder = 'Tickets Sold';

        let buttonPrice = document.createElement('button');
        buttonPrice.textContent = 'Archive';
        buttonPrice.addEventListener('click', archive);

        let divPrice = document.createElement('div');
        divPrice.appendChild(strongPrice);
        divPrice.appendChild(inputPrice);
        divPrice.appendChild(buttonPrice);

        let li = document.createElement('li');
        li.appendChild(spanMovieName);
        li.appendChild(strongHall);
        li.appendChild(divPrice);

        clearInputs();

        return li;
    }


    function createMovie(e) {
        console.log('createMovie')
        e.preventDefault();
        const name = inputs[0].value;
        const hall = inputs[1].value;
        const price = inputs[2].value;

        if (name.length > 0 && hall.length > 0 && price.length > 0 && Number.isInteger(parseInt(price)))  {

            moviesSection.appendChild(createMovieArticle(name, hall, price));

        }


    }

    function clearElements(ev) {
        console.log('clearElements')
        let ul = ev.target.parentNode.querySelector('ul');
        let li = ev.target.parentNode.querySelectorAll('ul li');
        if (Array.from(li).length > 0) {
            Array.from(li)
                .forEach(line => ul.removeChild(line));
        }
    }

    onScreenBtn.addEventListener('click', createMovie);
    onClearBtn.addEventListener('click', clearElements);
}