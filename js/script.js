var index = 0;

function collor() {
    var colors = ["black", "purple", "orange", "yellow", "green", "red", "blue", "white"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index >colors.length - 1)
        index = 0;


}