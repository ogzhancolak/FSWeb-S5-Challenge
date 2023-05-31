import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

    const topicler = document.createElement("div");
    topicler.setAttribute("class", "topics");

    if (!Array.isArray(konu)) {
      throw new Error("Konu parametresi bir dizi olmalıdır!");
    } else {
      for (let i = 0; i < konu.length; i++) {
        const tab = document.createElement("div");
        tab.setAttribute("class", "tab");
        tab.textContent = konu[i];
        topicler.appendChild(tab);
      }

      return topicler;
    }
  }
  

  const tabEkleyici = (secici) => {
    // GÖREV 4
    // ---------------------
    // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
    // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
    // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
    // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
    //

    const seciciTAB = document.querySelector(secici);

    axios
      .get("http://localhost:5001/api/konular")
      .then((response) => {
        const data = response.data;
        const konular = data.konular;
  
        const topicsDiv = Tablar(konular);
  
        seciciTAB.appendChild(topicsDiv);
      })
      .catch((error) => console.error(error));
  
    return seciciTAB;
  }

  export { Tablar, tabEkleyici }
