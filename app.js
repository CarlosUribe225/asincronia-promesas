
const uri = ('./data.json');

const loadData = async () => {
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);
}
loadData ();


    let table = document.getElementById('tableResults');

    
    let results= [
        {
            "title": "Estudiar Js",
            "priority": "alta",
            "isDone": false
        },
        {
            "title": "Estudiar CSS",
            "priority": "alta",
            "isDone": true
        },
        {
            "title": "Estudiar OOP",
            "priority": "media",
            "isDone": false
        },
        {
            "title": "Estudiar IA",
            "priority": "baja",
            "isDone": false
        }
    ];
    

for (let i = 0; i < results.length; i++) {
    let row = table.insertRow();

    let titleCell = row.insertCell();
    titleCell.appendChild(document.createTextNode(results[i].title))

    let priorityCell = row.insertCell();
    priorityCell.appendChild(document.createTextNode(results[i].priority))

    let isDoneCell = row.insertCell();
    isDoneCell.appendChild(document.createTextNode(results[i].isDone))

}

