// const list = document.querySelectorAll(".list");
// function activeLink(){
//     list.forEach((item) =>
//     item.classList.remove('ativo'));
//     this.classList.add("ativo")

// }

// Array.from(list).forEach((item) =>
// item.addEventListener('click',activeLink));

const seriesFilmes = document.getElementById('seriesFilmes')
function rederSeriesFilmes(){
    return `<li class="movie">
    <div>
     Filme
    </div>
    <div>
     <span class="iconSeries"><span class="material-symbols-outlined">
     movie
     </span></span>
    </div>
    <div>
     Em breve
    </div>
 </li>
 <li class="movie">
     <div>
      Série
     </div>
     <div>
      <span class="iconSeries"><span class="material-symbols-outlined">
      tv
      </span></span>
     </div>
     <div>
      Em breve
     </div>
  </li>`
}

if (seriesFilmes){
for (let i = 0; i <8; i++) {
    seriesFilmes.innerHTML+=rederSeriesFilmes()
    
}
}
const series = document.getElementById('series')
console.log(series1)
function series1(){
    return `<li class="movie">
    <div>
     Série
    </div>
    <div>
     <span class="iconSeries"><span class="material-symbols-outlined">
     tv
     </span></span>
    </div>
    <div>
     Em breve
    </div>
 </li>`
 
}
if (series){
    for (let i = 0; i <16; i++) {
        series.innerHTML+=series1()
    }
}


const filmes = document.getElementById('filmes')
console.log(filmes)
function filmes1(){
    return `<li class="movie">
    <div>
     Filme
    </div>
    <div>
     <span class="iconSeries"><span class="material-symbols-outlined">
     movie
     </span></span>
    </div>
    <div>
     Em breve
    </div>
 </li>`
}
if(filmes){
    for (let i = 0; i <16; i++) {
        filmes.innerHTML+=filmes1()
    }
}