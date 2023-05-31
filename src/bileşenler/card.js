import axios from "axios";
import { response } from "express";


const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const headlineDiv = document.createElement('div');
  headlineDiv.setAttribute('class', 'headline');
  headlineDiv.textContent =  makale.anabaslik;
  card.append(headlineDiv);

  const authorDiv = document.createElement('div');
  authorDiv.setAttribute('class', 'author');
  card.append(authorDiv);

  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'img-container');
  authorDiv.append(imgContainer);

  const img = document.createElement('img');
  img.setAttribute('src', makale.yazarFoto);
  imgContainer.append(img);

  const span = document.createElement('span');
  span.textContent = `${makale.yazarAdı} tarafından`;
  authorDiv.append(span);

  return card;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  
  const aim = document.querySelector(secici);

  axios.get('http://localhost:5001/api/makaleler')
  .then((response) => {
    const data = response.data;

    for (const kategori in data.makaleler) {
      for (const makale of data.makaleler[kategori]) {
        console.log("makale :   ", makale)
        const card = Card({
        anabaslik: makale.anabaslik,
        yazarFoto: makale.yazarFoto,
        yazarAdi: makale.yazarAdi,
      });
        card.addEventListener("click", () => {
        console.log("makale basliği: ", makale.anabaslik);
        });
        hedef.appendChild(card);
     }
    }
  })
  return aim;
}



export { Card, cardEkleyici }
