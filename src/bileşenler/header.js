const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerDiv = document.createElement('div');
  headerDiv.setAttribute('class', 'header');

  const tarihSpan = document.createElement('span');
  tarihSpan.setAttribute('class', 'date');
  tarihSpan.textContent = tarih;
  headerDiv.append(tarihSpan);

  const h1 = document.createElement('h1');
  h1.textContent = baslik;
  headerDiv.append(h1);

  const tempSpan = document.createElement('temp');
  tempSpan.setAttribute('class', 'temp');
  tempSpan.textContent = yazi;
  headerDiv.append(tempSpan);

  return headerDiv;
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
  const headerA = Header('Lucky', '09.10.2022', 'Lucky Doğum Günü');
  const DomEkle = document.querySelector(secici);
  DomEkle.append(headerA);

  return DomEkle;
}

export { Header, headerEkleyici }
