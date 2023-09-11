const text = "おはよう";
fetch("https://www2.deepl.com/jsonrpc?method=LMT_handle_jobs", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ja,en-US;q=0.9,en;q=0.8,ur;q=0.7,ig;q=0.6,ti;q=0.5,zh-CN;q=0.4,zh;q=0.3,sl;q=0.2,it;q=0.1",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"111\", \"Google Chrome\";v=\"111\", \"Chromium\";v=\"111\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Chrome\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://www.deepl.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"jsonrpc\":\"2.0\",\"method\": \"LMT_handle_jobs\",\"params\":{\"jobs\":[{\"kind\":\"default\",\"sentences\":[{\"text\":\"" + text + "\",\"id\":1,\"prefix\":\"\"}],\"raw_en_context_before\":[],\"raw_en_context_after\":[],\"preferred_num_beams\":4,\"quality\":\"fast\"}],\"lang\":{\"target_lang\":\"EN\",\"preference\":{\"weight\":{\"DE\":0.10753,\"EN\":9.09583,\"ES\":0.10565,\"FR\":0.17175,\"IT\":0.19167,\"JA\":16.61561,\"NL\":0.35016,\"PL\":0.12189,\"PT\":0.08828,\"RU\":0.0936,\"ZH\":1.03303,\"BG\":0.06989,\"CS\":0.09609,\"DA\":0.09311,\"EL\":0.06642,\"ET\":0.0823,\"FI\":0.09804,\"HU\":0.08089,\"ID\":0.07348,\"LV\":0.05867,\"LT\":0.06684,\"RO\":0.07484,\"SK\":0.0796,\"SL\":0.06856,\"SV\":0.08984,\"TR\":0.07376,\"UK\":0.08029,\"KO\":0.09767,\"NB\":0.10707},\"default\":\"default\"},\"source_lang_user_selected\":\"JA\"},\"priority\":-1,\"commonJobParams\":{\"regionalVariant\":\"en-US\",\"mode\":\"translate\",\"browserType\":1},\"timestamp\":1000000000000},\"id\":20000000}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(r => r.json()).then(d => console.log(d["result"]["translations"][0]["beams"][0]["sentences"][0]["text"]))
