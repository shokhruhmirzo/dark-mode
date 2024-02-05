var body = document.querySelector('body');
var img = document.querySelector('.img');
var h1 = document.querySelector('.ali');
var p = document.querySelector('.about__right__text');
var me = document.querySelector('.yellow');
var gitHub = document.querySelector('.git__hub');
var instagram = document.querySelector('.instagram');
var telegram = document.querySelector('.telegram')

function bt(){
   document.body.classList.toggle('dark__theme');
 
   if(document.body.classList.contains('dark__theme')){
      img.src = "./img/moon.png";
      gitHub.src = "./img/git-hubjon.png";
      instagram.src = "./img/instagramjon.png";
      telegram.src = "./img/telegramjon.png"
      
   }else{
      img.src = "./img/yellow-sun.png"
      gitHub.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAm9JREFUSEvFlU2IjlEUx39/kQ1ZIMkS5XOKZKGmiBI2hmKkKBn5Sk0yPko0+WgojeQj7AglzIYdCwuUiHyWSRYWPposTApxPGe6z3TfO8/7zjOLydm87z33f+7/nnPP+T9ikE2DfD41CcxsGLAcWALMBCZDT8wH4DlwJ/PfkPS72kWrEpjZIuAsMKmfLN8DmyTdLcIVEpjZbuBouG2ZKv4F9kg6noL7EJhZC9BW5tQCTLOk9thfQWBmCwBP1f1e3w3AFmA/MAToBLzeUwG/9RHgDHAKWBl89ZIe5CS9BGY2HHgFTAybrZIO+H8z83f4LOl7WI8Axkt6F9b7gMMh7jVQJ+mPr2OC1cC1KL12Sc1lSmVmx4BdEXaZJK9ABcFlYG0EmifpYUmCuqydn0XnnZa0PSXw8kzL05Q0vczhOcbMngCzw/pxlsHclOALMDYAOiQ1DJDgCrAmxHRJGpMSfMoGa1wA3JO0cIAEt4GlIaZb0siU4CkwKwC8W0bXkoCYPEjKV2BU8L+V5K1c8cgXgI1RYJOki2WyMLMm4HyEvSRpXUrgNb8JfAO6vc99/F2PJP0oIjIzn4dtYeB8EHNblTXJ9ZTAZ8I7aQKwGNgMrAd+halulPTTg0JJbgXc0IT8DTBDkk96pVyb2QqX36xUH4E5YfDmhyy2JnW/CjQWZNYgqSP3F4ndSWCH64+kQ9XewMwOZsn0SElkJzI52Rk7qsm1i1srcD8TsRfAS0nnkgx833G5tZSS6xxtZvWAS69PZ5skf/BeMzNX0r3AI8Bl2n/7WH+fTN/3T2anJM8kJpjisi3JH7uq/d+Pfq2bld37B8MT0hliYf0NAAAAAElFTkSuQmCC"
      instagram.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAg5JREFUSEvFlU+IjlEUxn+PP0lKJCkLGyQx/jRjaawsaRZDKTaWJoqFLKRkYaFEjZXtaFhMYiUbyUZsxiQpzWLKymzUUGJmHvfo/b7u3Hnf+r70NWf1vvec8zz3/L2ix6Ie47MyBLZ3AleAo8B+aLyIgY/AG+CepC9lRpZFYPtCGANru0zfH2BE0sPcbwmB7X7gHbCqS/CW+TwwIOlD66AkeAoMdQH+DegDTgGjld+EpOEmghlgRw3BV+A28AnYAuwBrgEzkvpsDwDvK79pSbuaCH4AGwqCl6mQw5LmbG8NnaRZ2/uAF8DPVLNNwLbKb07SxmUEtiPvCwX4LLAbCLCzwDEgOuc1MAasrjood5uX1G6Qdg1sx+HvguCOpKvp5g+A6K5cRiVdtP0cOJEpFiStqYsgDqPVcjkPPKtuHPOQy5Skg7ZvpKzdzBSLkiKyf5JHEN+LBcgI8Dil5hVwoNBNSjps+3pK1a1cJ6mNW7Zp5DeXMUnnbN8HLhW6mNzLtiPCk5muvgZhYLskiIgOAeuBM8BgBRRFHk+tu66myL8khf3SFFUEdW0aszEkaTKPwHbsqUjf9iKy75I2NxHEsmoPSV64NLETxaAdL4Bbv58l7W0ieJJATjc4dnr8SFLMTG2KjgBv/3PZ9UuaqiWo6tC7dd1iLR6c2JZNkj84d1NLT5eGK/NkdlrNTux6HsFfblmsGZDoHZYAAAAASUVORK5CYII="
      telegram.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAeJJREFUSEvVlT9IlWEUxn9PIjWoSAQNIeEfaAoMiiAqxaG2wFChof8N0lpQQ1tRILSJ0WCNFZUY6NAUiBi0BYEtQZTQEETgUAT69B14la/bvd+93bxEZ7v3vO/ze99znvd8osGhBuvz/wFs7we6JD2I6mzIDWy3AyeBc0AvsCyp7a8AtjcBR4EzwCDQnOvnB0k76wLY7gbOA6eAHUn0E7Ca+/1U0lDNANstwHAqwcHcSQ1MADNA1DxKFXFF0lhVgO1DwNkkHpB8LCbgNuAJsDmXHJD0oizAdlz7dBLuKfNOfmRit4CbwAngHhD9WIsoVYukb78AbO8FbgBHCtz1MuovadH2NeB6mQO8kbR77f91m9p+m9VxV4WXvQxcBe6k/DhwscLaSUkXygGagL5U77Dd9rRoFhjNNi3ZDis+BI4XjJhYe/c3QH5D8nh/uELSVORst2aPaBoYKBCPVK+k14WAUoFk0zlgTxXx76nBK38K2Ae8qiIe6XlJYe31qGkW2Q5nPU+7vgBbK8BuS7pcD2AEeASE0w4Dx4Bw0pYS0Iikx/UARrMJeQk4IOlzanp4/RnQmRPslPS+HkCIfZT0tcRtMZLvJ9suSeooLV1NPajWXNvxLXgnaaEhgKIDbMgN/ingJ1zRhRmSzrVWAAAAAElFTkSuQmCC"
   }
 
   
}

document.addEventListener('contextmenu', function (p) {
   p.preventDefault();
   alert("Kod ni ko'chirish mumkinmas !!!");
});
