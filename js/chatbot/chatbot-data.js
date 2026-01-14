const CHATBOT_DATA = {
  "metadata": {
    "version": "5.0.0-ULTRA",
    "last_updated": "2026-01-14",
    "total_intents": 50,
    "total_faqs": 60,
    "supported_flows": 6
  },
  "categoryTree": {
    "is_hukuku": {
      "id": "is_hukuku",
      "label": "💼 İş Hukuku",
      "icon": "briefcase",
      "description": "İşçi hakları ve iş uyuşmazlıkları",
      "children": [
        {
          "id": "kidem_tazminati",
          "label": "Kıdem Tazminatı",
          "icon": "💰"
        },
        {
          "id": "ihbar_tazminati",
          "label": "İhbar Tazminatı",
          "icon": "📋"
        },
        {
          "id": "ise_iade",
          "label": "İşe İade Davası",
          "icon": "🔄"
        },
        {
          "id": "mobbing",
          "label": "Mobbing",
          "icon": "🚫"
        },
        {
          "id": "fazla_mesai",
          "label": "Fazla Mesai",
          "icon": "⏰"
        }
      ]
    },
    "aile_hukuku": {
      "id": "aile_hukuku",
      "label": "💔 Aile Hukuku",
      "icon": "family",
      "description": "Boşanma ve aile uyuşmazlıkları",
      "children": [
        {
          "id": "anlasmali_bosanma",
          "label": "Anlaşmalı Boşanma",
          "icon": "🤝"
        },
        {
          "id": "cekismeli_bosanma",
          "label": "Çekişmeli Boşanma",
          "icon": "⚔️"
        },
        {
          "id": "nafaka",
          "label": "Nafaka",
          "icon": "💵"
        },
        {
          "id": "velayet",
          "label": "Velayet",
          "icon": "👶"
        },
        {
          "id": "mal_paylasimi",
          "label": "Mal Paylaşımı",
          "icon": "🏠"
        }
      ]
    },
    "ceza_hukuku": {
      "id": "ceza_hukuku",
      "label": "⚖️ Ceza Hukuku",
      "icon": "gavel",
      "description": "Ceza davaları ve savunma",
      "children": [
        {
          "id": "tutukluluk",
          "label": "Tutukluluk",
          "icon": "🔒"
        },
        {
          "id": "beraat",
          "label": "Beraat Davası",
          "icon": "✅"
        },
        {
          "id": "temyiz",
          "label": "Temyiz",
          "icon": "📤"
        },
        {
          "id": "ceza_indirimi",
          "label": "Ceza İndirimi",
          "icon": "📉"
        }
      ]
    },
    "miras_hukuku": {
      "id": "miras_hukuku",
      "label": "📜 Miras Hukuku",
      "icon": "scroll",
      "description": "Miras ve veraset işlemleri",
      "children": [
        {
          "id": "veraset",
          "label": "Veraset İlamı",
          "icon": "📄"
        },
        {
          "id": "vasiyetname",
          "label": "Vasiyetname",
          "icon": "✍️"
        },
        {
          "id": "miras_payi",
          "label": "Miras Payı",
          "icon": "📊"
        },
        {
          "id": "red_mirasi",
          "label": "Mirasın Reddi",
          "icon": "❌"
        }
      ]
    },
    "gayrimenkul": {
      "id": "gayrimenkul",
      "label": "🏢 Gayrimenkul",
      "icon": "building",
      "description": "Taşınmaz ve kira uyuşmazlıkları",
      "children": [
        {
          "id": "tapu",
          "label": "Tapu İşlemleri",
          "icon": "📑"
        },
        {
          "id": "kira",
          "label": "Kira Davaları",
          "icon": "🏠"
        },
        {
          "id": "kamulastirma",
          "label": "Kamulaştırma",
          "icon": "🏗️"
        },
        {
          "id": "kat_mulkiyeti",
          "label": "Kat Mülkiyeti",
          "icon": "🏢"
        }
      ]
    },
    "ticaret_hukuku": {
      "id": "ticaret_hukuku",
      "label": "🏦 Ticaret Hukuku",
      "icon": "bank",
      "description": "Şirket ve ticari uyuşmazlıklar",
      "children": [
        {
          "id": "sirket_kurulus",
          "label": "Şirket Kuruluşu",
          "icon": "🏢"
        },
        {
          "id": "alacak",
          "label": "Alacak Takibi",
          "icon": "💳"
        },
        {
          "id": "iflas",
          "label": "İflas",
          "icon": "📉"
        },
        {
          "id": "sozlesme",
          "label": "Sözleşmeler",
          "icon": "📝"
        }
      ]
    }
  },
  "lawyers": {
    "mehmet_yilmaz": {
      "id": "mehmet_yilmaz",
      "name": "Av. Mehmet Yılmaz",
      "title": "Kurucu Ortak",
      "expertise": [
        "is_hukuku",
        "ticaret_hukuku"
      ],
      "experience": "25+ yıl",
      "image": "images/av-mehmet-yilmaz.jpg",
      "page": "av-mehmet-yilmaz.html",
      "phone": "+90 212 987 65 43",
      "bio": "İş hukuku ve ticaret hukuku alanlarında uzman."
    },
    "ayse_kara": {
      "id": "ayse_kara",
      "name": "Av. Ayşe Kara",
      "title": "Kıdemli Ortak",
      "expertise": [
        "aile_hukuku",
        "miras_hukuku"
      ],
      "experience": "18+ yıl",
      "image": "images/av-ayse-kara.jpg",
      "page": "av-ayse-kara.html",
      "phone": "+90 212 987 65 43",
      "bio": "Aile hukuku ve miras hukuku uzmanı."
    },
    "emre_demir": {
      "id": "emre_demir",
      "name": "Av. Emre Demir",
      "title": "Ceza Hukuku Uzmanı",
      "expertise": [
        "ceza_hukuku"
      ],
      "experience": "15+ yıl",
      "image": "images/av-emre-demir.jpg",
      "page": "av-emre-demir.html",
      "phone": "+90 212 987 65 43",
      "bio": "Ceza hukuku ve savunma stratejileri uzmanı."
    }
  },
  "calculators": {
    "kidem": {
      "id": "kidem",
      "title": "Kıdem Tazminatı Hesaplayıcı",
      "description": "Kıdem tazminatınızı hesaplayın",
      "inputs": [
        {
          "id": "years",
          "label": "Çalışma Süresi (Yıl)",
          "type": "number",
          "min": 1,
          "max": 50
        },
        {
          "id": "months",
          "label": "Çalışma Süresi (Ay)",
          "type": "number",
          "min": 0,
          "max": 11
        },
        {
          "id": "salary",
          "label": "Son Brüt Maaş (TL)",
          "type": "number",
          "min": 0
        }
      ],
      "formula": "(years + months/12) * salary",
      "note": "2024 kıdem tazminatı tavanı: 35.058,58 TL"
    },
    "nafaka": {
      "id": "nafaka",
      "title": "Nafaka Hesaplayıcı",
      "description": "Tahmini nafaka miktarını hesaplayın",
      "inputs": [
        {
          "id": "income1",
          "label": "Sizin Geliriniz (TL)",
          "type": "number"
        },
        {
          "id": "income2",
          "label": "Eşinizin Geliri (TL)",
          "type": "number"
        },
        {
          "id": "children",
          "label": "Çocuk Sayısı",
          "type": "number",
          "min": 0
        }
      ],
      "note": "Bu hesaplama tahminidir, kesin miktar mahkeme kararıyla belirlenir."
    }
  },
  "flows": {
    "flow_is_hukuku": {
      "id": "flow_is_hukuku",
      "title": "İş Hukuku Danışmanı",
      "start_node": "is_baslangic",
      "nodes": {
        "is_baslangic": {
          "message": "İş hukuku konusunda size yardımcı olacağım. 👔 Durumunuzu anlamam için birkaç soru sormam gerekiyor. Şu anda çalışma durumunuz nedir?",
          "options": [
            {
              "label": "İşten çıkarıldım",
              "next": "isten_cikarilma",
              "keywords": [
                "kovuldum",
                "işime son verildi"
              ]
            },
            {
              "label": "Hâlâ çalışıyorum",
              "next": "hala_calisiyor"
            },
            {
              "label": "İstifa ettim/edeceğim",
              "next": "istifa"
            }
          ]
        },
        "isten_cikarilma": {
          "message": "İşten çıkarılmanız için üzgünüm. 😔 Haklarınızı korumak için yanınızdayız. Kıdem ve ihbar tazminatlarınız ödendi mi?",
          "options": [
            {
              "label": "Hayır, ödenmedi",
              "next": "tazminat_odenmedi"
            },
            {
              "label": "Kısmen ödendi",
              "next": "tazminat_kismen"
            },
            {
              "label": "Evet, tam ödendi",
              "next": "ise_iade_istegi"
            }
          ]
        },
        "tazminat_odenmedi": {
          "message": "Bu durumda size yardımcı olabiliriz! Bu işyerinde ne kadar süredir çalışıyordunuz?",
          "options": [
            {
              "label": "1 yıldan az",
              "next": "sure_1_yil_az"
            },
            {
              "label": "1-5 yıl arası",
              "next": "sure_1_5_yil"
            },
            {
              "label": "5 yıldan fazla",
              "next": "sure_5_yil_fazla"
            }
          ]
        },
        "sure_1_yil_az": {
          "message": "1 yıldan az çalıştığınız için kıdem tazminatı hakkınız bulunmuyor. Ancak ihbar tazminatı ve diğer haklarınız için dava açılabilir.",
          "template": {
            "type": "info_card",
            "title": "Haklarınız",
            "icon": "📋",
            "bullets": [
              "İhbar Tazminatı (2 haftalık)",
              "Kullanılmamış İzin Ücreti",
              "Son Ay Maaşı"
            ],
            "actions": [
              {
                "label": "Avukat ile Görüş",
                "type": "redirect",
                "url": "contact.html"
              },
              {
                "label": "Hemen Ara",
                "type": "tel",
                "number": "02129876543"
              }
            ]
          },
          "next": "END"
        },
        "sure_1_5_yil": {
          "message": "Harika! Bu durumda hem kıdem hem ihbar tazminatı hakkınız var. 💰",
          "template": {
            "type": "calculator",
            "calculator_id": "kidem"
          },
          "options": [
            {
              "label": "Hesapla",
              "next": "hesaplama_sonucu"
            },
            {
              "label": "Randevu Al",
              "next": "randevu"
            }
          ]
        },
        "sure_5_yil_fazla": {
          "message": "5 yıldan fazla çalışmanız önemli bir hak oluşturuyor! Kıdem tazminatı + ihbar tazminatı + işe iade hakkınız mevcut. 🎯",
          "template": {
            "type": "info_card",
            "title": "Tüm Haklarınız",
            "icon": "💰",
            "bullets": [
              "Kıdem Tazminatı (yıl başına 1 brüt maaş)",
              "İhbar Tazminatı (8 haftalık)",
              "İşe İade Davası Hakkı",
              "Boşta Geçen Süre Ücreti (4 aya kadar)"
            ],
            "actions": [
              {
                "label": "Ücretsiz Değerlendirme",
                "type": "redirect",
                "url": "contact.html"
              }
            ]
          },
          "next": "END"
        },
        "hala_calisiyor": {
          "message": "Çalışırken yaşadığınız sorun hangisi?",
          "options": [
            {
              "label": "Mobbing/Psikolojik Baskı",
              "next": "mobbing"
            },
            {
              "label": "Fazla Mesai Ödenmedi",
              "next": "fazla_mesai"
            },
            {
              "label": "Maaş Gecikiyor",
              "next": "maas_gecikmesi"
            }
          ]
        },
        "mobbing": {
          "message": "Mobbing ciddi bir iş hukuku ihlalidir. Kanıt toplama ve yasal süreç hakkında uzman desteği almalısınız.",
          "template": {
            "type": "info_card",
            "title": "Mobbing Hakkında",
            "icon": "🚫",
            "bullets": [
              "Yazılı belge/mail saklayın",
              "Tanık isimlerini not edin",
              "Tıbbi rapor alın",
              "İşverenle yazılı iletişim kurun"
            ],
            "actions": [
              {
                "label": "Mobbing Uzmanı ile Görüş",
                "type": "redirect",
                "url": "is-hukuku.html#mobbing"
              }
            ]
          },
          "next": "END"
        },
        "fazla_mesai": {
          "message": "Fazla mesai alacaklarınız 5 yıla kadar geriye dönük talep edilebilir. Mesai saatlerinizi belgeleyin!",
          "template": {
            "type": "info_card",
            "title": "Fazla Mesai Hakları",
            "icon": "⏰",
            "bullets": [
              "Haftalık 45 saat üzeri = Fazla Mesai",
              "Her saat için %50 zamlı ücret",
              "5 yıllık zamanaşımı süresi"
            ],
            "actions": [
              {
                "label": "Detaylı Bilgi",
                "type": "redirect",
                "url": "is-hukuku.html"
              }
            ]
          },
          "next": "END"
        },
        "maas_gecikmesi": {
          "message": "Maaş 20 günden fazla gecikirse haklı fesih hakkınız doğar ve tazminat talep edebilirsiniz.",
          "next": "END"
        },
        "istifa": {
          "message": "İstifa etmeden önce haklarınızı bilin! Koşullara göre kıdem tazminatı alabilirsiniz.",
          "options": [
            {
              "label": "İstifa ettim",
              "next": "istifa_sonrasi"
            },
            {
              "label": "Henüz etmedim",
              "next": "istifa_oncesi"
            }
          ]
        },
        "istifa_sonrasi": {
          "message": "İstifa nedeninize bağlı olarak kıdem tazminatı hakkınız olabilir. Evlilik, askerlik, emeklilik gibi haklı nedenler varsa tazminat alırsınız.",
          "next": "END"
        },
        "istifa_oncesi": {
          "message": "İstifa etmeden önce mutlaka bir avukatla görüşün! Haklı fesih yaparsanız hem istifa edebilir hem tazminat alabilirsiniz.",
          "template": {
            "type": "info_card",
            "title": "Dikkat!",
            "icon": "⚠️",
            "bullets": [
              "Yazılı istifa vermeyin henüz",
              "Haklı fesih nedenlerini araştırın",
              "Avukat desteği alın"
            ],
            "actions": [
              {
                "label": "Acil Danışmanlık",
                "type": "tel",
                "number": "02129876543"
              }
            ]
          },
          "next": "END"
        },
        "ise_iade_istegi": {
          "message": "Tazminatınız ödense bile işe iade davası açabilirsiniz. İşten çıkarılma gerekçeniz gerçekçi değilse kazanma şansınız yüksek!",
          "options": [
            {
              "label": "İşe İade İstiyorum",
              "next": "randevu"
            },
            {
              "label": "Sadece Bilgi Aldım",
              "next": "END"
            }
          ]
        },
        "tazminat_kismen": {
          "message": "Eksik ödeme yapıldıysa fark için dava açılabilir. Detaylı hesaplama yapılmalı.",
          "next": "randevu"
        },
        "hesaplama_sonucu": {
          "message": "Hesaplama sonucunuzu gördünüz. Kesin miktar için avukatımızla görüşmenizi öneririz.",
          "next": "randevu"
        },
        "randevu": {
          "message": "Ücretsiz ön görüşme için randevu oluşturabilirsiniz. 📅",
          "template": {
            "type": "info_card",
            "title": "Randevu Al",
            "icon": "📅",
            "actions": [
              {
                "label": "Online Randevu",
                "type": "redirect",
                "url": "contact.html"
              },
              {
                "label": "Hemen Ara",
                "type": "tel",
                "number": "02129876543"
              }
            ]
          },
          "next": "END"
        }
      }
    },
    "flow_aile": {
      "id": "flow_aile",
      "title": "Aile Hukuku Danışmanı",
      "start_node": "aile_baslangic",
      "nodes": {
        "aile_baslangic": {
          "message": "Aile hukuku konusundaki sorularınız için buradayım. 💔 Hangi konuda yardım istersiniz?",
          "options": [
            {
              "label": "Boşanmak istiyorum",
              "next": "bosanma"
            },
            {
              "label": "Nafaka sorunu",
              "next": "nafaka_sorunu"
            },
            {
              "label": "Velayet davası",
              "next": "velayet"
            }
          ]
        },
        "bosanma": {
          "message": "Boşanma süreci zor olabilir, yanınızdayız. Eşinizle anlaşabiliyor musunuz?",
          "options": [
            {
              "label": "Evet, anlaşmalı",
              "next": "anlasmali"
            },
            {
              "label": "Hayır, çekişmeli",
              "next": "cekismeli"
            }
          ]
        },
        "anlasmali": {
          "message": "Anlaşmalı boşanma en hızlı yoldur! 1 ay içinde sonuçlanabilir. Protokol hazırlanması gerekir.",
          "template": {
            "type": "info_card",
            "title": "Anlaşmalı Boşanma",
            "icon": "🤝",
            "bullets": [
              "En az 1 yıl evli olma şartı",
              "Nafaka, velayet, mal varlığı protokolü",
              "1 ay içinde sonuç"
            ],
            "actions": [
              {
                "label": "Protokol Hazırlat",
                "type": "redirect",
                "url": "contact.html"
              }
            ]
          },
          "next": "END"
        },
        "cekismeli": {
          "message": "Çekişmeli boşanma 1-2 yıl sürebilir. Delil toplama ve strateji önemlidir.",
          "template": {
            "type": "info_card",
            "title": "Çekişmeli Boşanma",
            "icon": "⚔️",
            "bullets": [
              "Boşanma sebeplerini belgeleyin",
              "Tanık listesi hazırlayın",
              "Mal varlığı tespiti yapın"
            ],
            "actions": [
              {
                "label": "Uzman Avukat",
                "type": "redirect",
                "url": "aile-bosanma.html"
              }
            ]
          },
          "next": "END"
        },
        "nafaka_sorunu": {
          "message": "Nafaka konusundaki sorununuz nedir?",
          "options": [
            {
              "label": "Nafaka almak istiyorum",
              "next": "nafaka_talep"
            },
            {
              "label": "Nafaka ödenmiyor",
              "next": "nafaka_odenmeme"
            },
            {
              "label": "Nafaka indirimi",
              "next": "nafaka_indirim"
            }
          ]
        },
        "nafaka_talep": {
          "message": "Nafaka, ekonomik duruma göre belirlenir. Gelir belgeleri önemlidir.",
          "template": {
            "type": "calculator",
            "calculator_id": "nafaka"
          },
          "next": "END"
        },
        "nafaka_odenmeme": {
          "message": "Nafaka ödenmezse icra takibi başlatılabilir. 3 ay ödenmezse hapis cezası da uygulanabilir!",
          "template": {
            "type": "info_card",
            "title": "Nafaka Takibi",
            "icon": "⚠️",
            "actions": [
              {
                "label": "İcra İşlemi Başlat",
                "type": "redirect",
                "url": "contact.html"
              }
            ]
          },
          "next": "END"
        },
        "nafaka_indirim": {
          "message": "Gelir değişikliği varsa nafaka artırım/indirim davası açılabilir.",
          "next": "END"
        },
        "velayet": {
          "message": "Velayet davalarında çocuğun üstün yararı esastır. Detaylı değerlendirme için görüşme gerekir.",
          "template": {
            "type": "info_card",
            "title": "Velayet Davası",
            "icon": "👶",
            "bullets": [
              "Çocuğun yaşı ve tercihi",
              "Ebeveyn uygunluğu",
              "Ekonomik şartlar",
              "Yaşam koşulları"
            ],
            "actions": [
              {
                "label": "Aile Hukuku Uzmanı",
                "type": "redirect",
                "url": "aile-bosanma.html"
              }
            ]
          },
          "next": "END"
        }
      }
    },
    "flow_ceza": {
      "id": "flow_ceza",
      "title": "Ceza Hukuku Danışmanı",
      "start_node": "ceza_baslangic",
      "nodes": {
        "ceza_baslangic": {
          "message": "Ceza hukuku konusunda yardımcı olacağım. ⚖️ Durumunuz nedir?",
          "options": [
            {
              "label": "Şüpheli/Sanık durumundayım",
              "next": "supheli"
            },
            {
              "label": "Şikayetçi/Mağdur durumundayım",
              "next": "magdur"
            },
            {
              "label": "Ceza aldım, itiraz etmek istiyorum",
              "next": "itiraz"
            }
          ]
        },
        "supheli": {
          "message": "🚨 Önemli: Sessiz kalma hakkınızı kullanın! Avukat olmadan ifade vermeyin.",
          "template": {
            "type": "info_card",
            "title": "ACİL TAVSİYELER",
            "icon": "🚨",
            "bullets": [
              "Susma hakkınızı kullanın",
              "Avukatsız ifade vermeyin",
              "İmzaladığınız belgeleri okuyun",
              "7/24 destek alın"
            ],
            "actions": [
              {
                "label": "ACİL AVUKAT",
                "type": "tel",
                "number": "02129876543"
              }
            ]
          },
          "next": "END"
        },
        "magdur": {
          "message": "Mağdur olarak haklarınızı korumak için başvurunuz önemli. Hangi suça maruz kaldınız?",
          "options": [
            {
              "label": "Dolandırıcılık",
              "next": "dolandiricilik"
            },
            {
              "label": "Hakaret/Tehdit",
              "next": "hakaret"
            },
            {
              "label": "Darp/Yaralama",
              "next": "darp"
            }
          ]
        },
        "dolandiricilik": {
          "message": "Dolandırıcılık için savcılığa şikayet dilekçesi ve tüm delilleri sunmalısınız.",
          "template": {
            "type": "info_card",
            "title": "Dolandırıcılık Şikayeti",
            "icon": "🔍",
            "bullets": [
              "Banka dekontları",
              "Mesajlaşma kayıtları",
              "Tanık bilgileri"
            ],
            "actions": [
              {
                "label": "Şikayet Dilekçesi Hazırlat",
                "type": "redirect",
                "url": "contact.html"
              }
            ]
          },
          "next": "END"
        },
        "hakaret": {
          "message": "Hakaret ve tehdit suçları için ekran görüntüleri kritik delildir. 6 ay içinde şikayet edilmelidir!",
          "next": "END"
        },
        "darp": {
          "message": "Derhal tıbbi rapor alın! Darp raporu olmadan dava çok zor ilerler.",
          "template": {
            "type": "info_card",
            "title": "Acil Yapılması Gerekenler",
            "icon": "🏥",
            "bullets": [
              "Darp raporu aldırın",
              "Fotoğraf çekin",
              "155'i arayın"
            ],
            "actions": [
              {
                "label": "Hukuki Destek",
                "type": "tel",
                "number": "02129876543"
              }
            ]
          },
          "next": "END"
        },
        "itiraz": {
          "message": "Aldığınız cezaya itiraz etmek için süre sınırı var! Kararı aldıktan sonra genellikle 7 gün içinde itiraz edilmeli.",
          "options": [
            {
              "label": "İstinaf başvurusu",
              "next": "istinaf"
            },
            {
              "label": "Temyiz başvurusu",
              "next": "temyiz"
            }
          ]
        },
        "istinaf": {
          "message": "İstinaf, ilk derece mahkemesi kararlarına karşı yapılır. 7 gün süreniz var!",
          "next": "END"
        },
        "temyiz": {
          "message": "Temyiz, istinaf kararlarına karşı Yargıtay'a yapılır. Süre 15 gündür.",
          "next": "END"
        }
      }
    },
    "flow_miras": {
      "id": "flow_miras",
      "title": "Miras Hukuku Danışmanı",
      "start_node": "miras_baslangic",
      "nodes": {
        "miras_baslangic": {
          "message": "Miras hukuku konusunda yardımcı olacağım. 📜 Durumunuz nedir?",
          "options": [
            {
              "label": "Mirasçıyım, hakları öğrenmek istiyorum",
              "next": "mirasci"
            },
            {
              "label": "Vasiyetname hazırlamak istiyorum",
              "next": "vasiyet"
            },
            {
              "label": "Miras paylaşımı sorunu var",
              "next": "miras_payi"
            }
          ]
        },
        "mirasci": {
          "message": "Mirasçı olarak haklarınız kanunla belirlidir. Veraset ilamı almanız gerekir.",
          "template": {
            "type": "info_card",
            "title": "Mirasçı Hakları",
            "icon": "📋",
            "bullets": [
              "Birinci derece: Çocuklar (eşit pay)",
              "Eş: Çocuklarla 1/4, diğerleriyle daha fazla",
              "İkinci derece: Anne-Baba"
            ],
            "actions": [
              {
                "label": "Veraset Danışmanlığı",
                "type": "redirect",
                "url": "miras-hukuku.html"
              }
            ]
          },
          "next": "END"
        },
        "vasiyet": {
          "message": "Vasiyetname ile mal varlığınızın geleceğini planlayabilirsiniz. Ancak saklı pay kuralları var!",
          "next": "END"
        },
        "miras_payi": {
          "message": "Miras paylaşım anlaşmazlıklarında ortaklığın giderilmesi davası açılabilir.",
          "next": "END"
        }
      }
    },
    "flow_gayrimenkul": {
      "id": "flow_gayrimenkul",
      "title": "Gayrimenkul Hukuku Danışmanı",
      "start_node": "gayrimenkul_baslangic",
      "nodes": {
        "gayrimenkul_baslangic": {
          "message": "Gayrimenkul konusunda yardımcı olacağım. 🏢 Hangi konuda sorun yaşıyorsunuz?",
          "options": [
            {
              "label": "Kira uyuşmazlığı",
              "next": "kira"
            },
            {
              "label": "Tapu işlemleri",
              "next": "tapu"
            },
            {
              "label": "Kamulaştırma",
              "next": "kamulastirma"
            }
          ]
        },
        "kira": {
          "message": "Kira sorununuz nedir?",
          "options": [
            {
              "label": "Kiracı tahliye",
              "next": "tahliye"
            },
            {
              "label": "Kira artışı",
              "next": "kira_artisi"
            },
            {
              "label": "Kira alacağı",
              "next": "kira_alacagi"
            }
          ]
        },
        "tahliye": {
          "message": "Kiracı tahliyesi için haklı neden gerekir: kira ödememesi, sözleşme ihlali, konut/işyeri ihtiyacı gibi.",
          "template": {
            "type": "info_card",
            "title": "Tahliye Sebepleri",
            "icon": "🏠",
            "bullets": [
              "İki haklı ihtar (ödeme)",
              "10 yıllık süre sonunda",
              "Konut ihtiyacı (sahibi için)",
              "Tadilat gereksinimi"
            ],
            "actions": [
              {
                "label": "Tahliye Davası",
                "type": "redirect",
                "url": "gayrimenkul-hukuku.html"
              }
            ]
          },
          "next": "END"
        },
        "kira_artisi": {
          "message": "Konut kiralarında yıllık artış TÜFE ile sınırlıdır (2024'e kadar %25 tavanı vardı).",
          "next": "END"
        },
        "kira_alacagi": {
          "message": "Ödenmeyen kira için icra takibi başlatılabilir ve tahliye istenebilir.",
          "next": "END"
        },
        "tapu": {
          "message": "Tapu devir, ipotek, şerh ve düzeltme işlemlerinde hukuki destek sunuyoruz.",
          "next": "END"
        },
        "kamulastirma": {
          "message": "Kamulaştırma bedelinin düşük bulunması halinde dava açılabilir. Genellikle %30-50 artış sağlanır!",
          "template": {
            "type": "info_card",
            "title": "Kamulaştırma Davası",
            "icon": "🏗️",
            "bullets": [
              "Bedel tespit davası",
              "30 gün içinde dava hakkı",
              "Ekspertiz raporları önemli"
            ],
            "actions": [
              {
                "label": "Değerleme Danışmanlığı",
                "type": "redirect",
                "url": "gayrimenkul-hukuku.html"
              }
            ]
          },
          "next": "END"
        }
      }
    },
    "flow_ticaret": {
      "id": "flow_ticaret",
      "title": "Ticaret Hukuku Danışmanı",
      "start_node": "ticaret_baslangic",
      "nodes": {
        "ticaret_baslangic": {
          "message": "Ticaret hukuku konusunda yardımcı olacağım. 🏦 Hangi konuda destek gerekiyor?",
          "options": [
            {
              "label": "Şirket kurmak istiyorum",
              "next": "sirket_kur"
            },
            {
              "label": "Alacak takibi",
              "next": "alacak"
            },
            {
              "label": "Sözleşme hazırlama/inceleme",
              "next": "sozlesme"
            }
          ]
        },
        "sirket_kur": {
          "message": "Hangi şirket türü düşünüyorsunuz?",
          "options": [
            {
              "label": "Limited Şirket",
              "next": "limited"
            },
            {
              "label": "Anonim Şirket",
              "next": "anonim"
            },
            {
              "label": "Şahıs Şirketi",
              "next": "sahis"
            }
          ]
        },
        "limited": {
          "message": "Limited şirket en yaygın tercih. Minimum 10.000 TL sermaye, 1-50 ortak.",
          "template": {
            "type": "info_card",
            "title": "Limited Şirket Kuruluşu",
            "icon": "🏢",
            "bullets": [
              "10.000 TL asgari sermaye",
              "1-50 ortak",
              "1 müdür yeterli",
              "Ortaklar sınırlı sorumlu"
            ],
            "actions": [
              {
                "label": "Kuruluş Danışmanlığı",
                "type": "redirect",
                "url": "ticaret-hukuku.html"
              }
            ]
          },
          "next": "END"
        },
        "anonim": {
          "message": "Anonim şirket büyük ölçekli işler için uygundur. Minimum 50.000 TL sermaye gerekir.",
          "next": "END"
        },
        "sahis": {
          "message": "Şahıs şirketi en basit yapı. Vergisel dezavantajları olabilir.",
          "next": "END"
        },
        "alacak": {
          "message": "Ödenmemiş alacaklarınız için hızlı icra takibi başlatıyoruz.",
          "template": {
            "type": "info_card",
            "title": "Alacak Takibi",
            "icon": "💳",
            "bullets": [
              "İcra takibi",
              "Haciz işlemleri",
              "İflas davası"
            ],
            "actions": [
              {
                "label": "Takip Başlat",
                "type": "redirect",
                "url": "contact.html"
              }
            ]
          },
          "next": "END"
        },
        "sozlesme": {
          "message": "Sözleşme hazırlama ve inceleme hizmeti sunuyoruz. Tip sözleşmelere dikkat!",
          "next": "END"
        }
      }
    }
  },
  "intents": [
    {
      "tag": "selamlama",
      "patterns": [
        "merhaba",
        "selam",
        "günaydın",
        "iyi günler",
        "iyi akşamlar",
        "hey",
        "başla",
        "yardım"
      ],
      "responses": [
        "Merhaba! 👋 Yılmaz Hukuk Bürosu'na hoş geldiniz. Size nasıl yardımcı olabilirim?"
      ],
      "label": "👋 Merhaba",
      "related": [
        "is_hukuku",
        "aile_hukuku",
        "ceza_hukuku",
        "randevu"
      ]
    },
    {
      "tag": "is_hukuku",
      "patterns": [
        "iş hukuku",
        "iş davası",
        "işten çıkarıldım",
        "kovuldum",
        "tazminat",
        "işe iade",
        "mobbing",
        "fazla mesai"
      ],
      "responses": [
        "İş hukuku konusunda size yardımcı olacağım. Durumunuzu anlamamız için birkaç soru sormam gerekiyor."
      ],
      "label": "💼 İş Hukuku",
      "flow_trigger": "flow_is_hukuku",
      "template": {
        "type": "info_card",
        "title": "İş Hukuku Danışmanlığı",
        "icon": "💼",
        "bullets": [
          "İşe iade davaları",
          "Kıdem ve ihbar tazminatı",
          "Fazla mesai alacakları",
          "Mobbing davaları"
        ],
        "actions": [
          {
            "label": "Detaylı Bilgi",
            "type": "redirect",
            "url": "is-hukuku.html"
          },
          {
            "label": "Hemen Ara",
            "type": "tel",
            "number": "02129876543"
          }
        ]
      },
      "related": [
        "kidem_tazminati",
        "ihbar_tazminati",
        "ise_iade"
      ]
    },
    {
      "tag": "aile_hukuku",
      "patterns": [
        "boşanma",
        "aile hukuku",
        "nafaka",
        "velayet",
        "anlaşmalı boşanma",
        "çekişmeli",
        "eşimden ayrılmak",
        "mal paylaşımı"
      ],
      "responses": [
        "Aile hukuku hassas bir süreçtir, size en iyi desteği sunuyoruz."
      ],
      "label": "💔 Aile Hukuku",
      "flow_trigger": "flow_aile",
      "template": {
        "type": "info_card",
        "title": "Aile Hukuku",
        "icon": "💔",
        "bullets": [
          "Çekişmeli ve Anlaşmalı Boşanma",
          "Velayet ve Nafaka Davaları",
          "Mal Paylaşımı",
          "Koruma Kararları"
        ],
        "actions": [
          {
            "label": "Aile Hukuku Sayfası",
            "type": "redirect",
            "url": "aile-bosanma.html"
          },
          {
            "label": "Hemen Ara",
            "type": "tel",
            "number": "02129876543"
          }
        ]
      },
      "related": [
        "anlasmali_bosanma",
        "cekismeli_bosanma",
        "nafaka"
      ]
    },
    {
      "tag": "ceza_hukuku",
      "patterns": [
        "ceza davası",
        "ceza hukuku",
        "tutuklandım",
        "sanık",
        "şüpheli",
        "beraat",
        "temyiz",
        "hapis cezası"
      ],
      "responses": [
        "Ceza hukuku konusunda acil destek için buradayız."
      ],
      "label": "⚖️ Ceza Hukuku",
      "flow_trigger": "flow_ceza",
      "template": {
        "type": "info_card",
        "title": "Ceza Hukuku",
        "icon": "⚖️",
        "bullets": [
          "Ceza savunması",
          "Tutukluluk itirazı",
          "Beraat stratejileri",
          "Temyiz başvurusu"
        ],
        "actions": [
          {
            "label": "Ceza Hukuku Sayfası",
            "type": "redirect",
            "url": "ceza-hukuku.html"
          },
          {
            "label": "ACİL: Hemen Ara",
            "type": "tel",
            "number": "02129876543"
          }
        ]
      }
    },
    {
      "tag": "miras_hukuku",
      "patterns": [
        "miras",
        "miras hukuku",
        "veraset",
        "vasiyetname",
        "mirasçı",
        "miras payı",
        "mirasın reddi"
      ],
      "responses": [
        "Miras hukuku konusunda yanınızdayız."
      ],
      "label": "📜 Miras Hukuku",
      "flow_trigger": "flow_miras",
      "template": {
        "type": "info_card",
        "title": "Miras Hukuku",
        "icon": "📜",
        "bullets": [
          "Veraset ilamı",
          "Vasiyetname hazırlama",
          "Miras paylaşımı",
          "Tenkis davası"
        ],
        "actions": [
          {
            "label": "Miras Hukuku Sayfası",
            "type": "redirect",
            "url": "miras-hukuku.html"
          }
        ]
      }
    },
    {
      "tag": "gayrimenkul",
      "patterns": [
        "gayrimenkul",
        "tapu",
        "kira",
        "kiracı",
        "tahliye",
        "kamulaştırma",
        "kat mülkiyeti"
      ],
      "responses": [
        "Gayrimenkul hukuku konusunda destek sunuyoruz."
      ],
      "label": "🏢 Gayrimenkul",
      "flow_trigger": "flow_gayrimenkul",
      "template": {
        "type": "info_card",
        "title": "Gayrimenkul Hukuku",
        "icon": "🏢",
        "bullets": [
          "Tapu işlemleri",
          "Kira davaları",
          "Tahliye",
          "Kamulaştırma"
        ],
        "actions": [
          {
            "label": "Gayrimenkul Sayfası",
            "type": "redirect",
            "url": "gayrimenkul-hukuku.html"
          }
        ]
      }
    },
    {
      "tag": "ticaret_hukuku",
      "patterns": [
        "ticaret",
        "şirket",
        "şirket kuruluşu",
        "limited",
        "anonim",
        "alacak",
        "sözleşme",
        "iflas"
      ],
      "responses": [
        "Ticaret hukuku konusunda profesyonel destek."
      ],
      "label": "🏦 Ticaret Hukuku",
      "flow_trigger": "flow_ticaret",
      "template": {
        "type": "info_card",
        "title": "Ticaret Hukuku",
        "icon": "🏦",
        "bullets": [
          "Şirket kuruluşu",
          "Alacak takibi",
          "Sözleşme hazırlama",
          "İflas davaları"
        ],
        "actions": [
          {
            "label": "Ticaret Hukuku Sayfası",
            "type": "redirect",
            "url": "ticaret-hukuku.html"
          }
        ]
      }
    },
    {
      "tag": "kidem_tazminati",
      "patterns": [
        "kıdem tazminatı",
        "kıdem hesapla",
        "kıdem ne kadar",
        "kıdem alabilir miyim"
      ],
      "responses": [
        "Kıdem tazminatı, her tam yıl için 30 günlük brüt ücret tutarındadır."
      ],
      "label": "💰 Kıdem Tazminatı",
      "template": {
        "type": "calculator",
        "calculator_id": "kidem"
      }
    },
    {
      "tag": "acil_durum",
      "patterns": [
        "acil",
        "çok acil",
        "yardım edin",
        "tutuklandım",
        "polis geldi",
        "tehdit ediliyorum",
        "gözaltı",
        "tutuklama"
      ],
      "responses": [
        "🚨 Acil durum anlıyorum. Sakin olun."
      ],
      "responses_urgent": [
        "🚨 SAKİN OLUN! Acil hukuki destek için hemen arayın: 0212 987 65 43"
      ],
      "label": "🚨 Acil Durum",
      "template": {
        "type": "info_card",
        "title": "7/24 ACİL HUKUK HATTI",
        "icon": "🚨",
        "actions": [
          {
            "label": "HEMEN ARA",
            "type": "tel",
            "number": "02129876543"
          }
        ]
      }
    },
    {
      "tag": "randevu",
      "patterns": [
        "randevu",
        "görüşme",
        "avukatla görüşmek",
        "randevu al",
        "danışmanlık",
        "ücretsiz görüşme"
      ],
      "responses": [
        "Ücretsiz ön görüşme için randevu oluşturabilirsiniz."
      ],
      "label": "📅 Randevu",
      "template": {
        "type": "info_card",
        "title": "Online Randevu",
        "icon": "📅",
        "bullets": [
          "Ücretsiz Ön Görüşme",
          "Online veya Yüz Yüze",
          "Hızlı Planlama"
        ],
        "actions": [
          {
            "label": "Randevu Formu",
            "type": "redirect",
            "url": "contact.html"
          },
          {
            "label": "Hemen Ara",
            "type": "tel",
            "number": "02129876543"
          }
        ]
      }
    },
    {
      "tag": "iletisim",
      "patterns": [
        "iletişim",
        "telefon",
        "adres",
        "mail",
        "e-posta",
        "neredesiniz",
        "konum"
      ],
      "responses": [
        "İletişim bilgilerimiz aşağıda."
      ],
      "label": "📞 İletişim",
      "template": {
        "type": "info_card",
        "title": "İletişim Bilgileri",
        "icon": "📞",
        "bullets": [
          "📞 0212 987 65 43",
          "📧 info@yilmazhukuk.com",
          "📍 Nispetiye Mah. Aytar Cad. No:12/5, Etiler, İstanbul"
        ],
        "actions": [
          {
            "label": "Haritada Göster",
            "type": "redirect",
            "url": "contact.html"
          },
          {
            "label": "Ara",
            "type": "tel",
            "number": "02129876543"
          }
        ]
      }
    },
    {
      "tag": "avukatlar",
      "patterns": [
        "avukatlar",
        "kim var",
        "ekip",
        "avukat kadrosu",
        "uzmanlar"
      ],
      "responses": [
        "Deneyimli avukat kadromuzla tanışın."
      ],
      "label": "👨‍⚖️ Avukatlarımız",
      "template": {
        "type": "lawyer_list"
      }
    },
    {
      "tag": "tesekkur",
      "patterns": [
        "teşekkür",
        "sağol",
        "teşekkürler",
        "çok sağol",
        "yardımın için teşekkürler"
      ],
      "responses": [
        "Rica ederim! 😊 Başka bir konuda yardımcı olabilir miyim?"
      ],
      "label": "🙏 Teşekkür"
    },
    {
      "tag": "vedalaşma",
      "patterns": [
        "hoşça kal",
        "görüşürüz",
        "bay bay",
        "iyi günler",
        "kapatabilirim"
      ],
      "responses": [
        "Görüşmek üzere! 👋 Hukuki bir konuda yardıma ihtiyacınız olursa her zaman buradayız."
      ],
      "label": "👋 Vedalaşma"
    },
    {
      "tag": "ucret",
      "patterns": [
        "ücret",
        "fiyat",
        "ne kadar",
        "maliyet",
        "vekalet ücreti",
        "masraf"
      ],
      "responses": [
        "Ücretlendirme dava türüne göre değişir. Ücretsiz ön görüşmede detaylı bilgi verilir."
      ],
      "label": "💵 Ücret Bilgisi",
      "template": {
        "type": "info_card",
        "title": "Ücret Politikası",
        "icon": "💵",
        "bullets": [
          "İlk görüşme ücretsiz",
          "Dava türüne göre değişken ücret",
          "Taksit imkanı mevcut"
        ],
        "actions": [
          {
            "label": "Ücretsiz Ön Görüşme",
            "type": "redirect",
            "url": "contact.html"
          }
        ]
      }
    }
  ],
  "faqs": {
    "kidem_nedir": {
      "question": "Kıdem tazminatı nedir?",
      "answer": "Kıdem tazminatı, işverenin tek taraflı feshi veya işçinin haklı nedenle istifası durumunda ödenen tazminattır. Her tam yıl için 30 günlük brüt ücret tutarındadır.",
      "category": "is_hukuku",
      "keywords": [
        "kıdem",
        "tazminat",
        "işten çıkarılma"
      ]
    },
    "bosanma_suresi": {
      "question": "Boşanma davası ne kadar sürer?",
      "answer": "Anlaşmalı boşanma 1-2 ay, çekişmeli boşanma 1-3 yıl sürebilir. Duruşma takvimi ve mahkeme yoğunluğu etkiler.",
      "category": "aile_hukuku",
      "keywords": [
        "boşanma",
        "süre",
        "dava"
      ]
    },
    "nafaka_miktari": {
      "question": "Nafaka miktarı nasıl belirlenir?",
      "answer": "Nafaka, tarafların ekonomik durumu, çocuk sayısı ve yaşam standartları gözetilerek hakim tarafından belirlenir.",
      "category": "aile_hukuku",
      "keywords": [
        "nafaka",
        "miktar",
        "hesaplama"
      ]
    },
    "velayet_kriteri": {
      "question": "Velayet kararı nasıl verilir?",
      "answer": "Çocuğun üstün yararı esas alınır. Yaş, ebeveyn uygunluğu, ekonomik durum ve çocuğun tercihi değerlendirilir.",
      "category": "aile_hukuku",
      "keywords": [
        "velayet",
        "çocuk",
        "karar"
      ]
    },
    "ihbar_suresi": {
      "question": "İhbar süresi ne kadardır?",
      "answer": "6 aya kadar çalışma: 2 hafta, 6-18 ay: 4 hafta, 18-36 ay: 6 hafta, 3 yıl üzeri: 8 hafta ihbar süresi uygulanır.",
      "category": "is_hukuku",
      "keywords": [
        "ihbar",
        "süre",
        "hafta"
      ]
    },
    "ise_iade_sartlari": {
      "question": "İşe iade davası açmak için şartlar nelerdir?",
      "answer": "30+ işçi çalışan işyeri, 6+ ay kıdem, belirsiz süreli sözleşme ve 1 ay içinde dava açma şartları gerekir.",
      "category": "is_hukuku",
      "keywords": [
        "işe iade",
        "şart",
        "dava"
      ]
    },
    "miras_payi": {
      "question": "Miras payları nasıl hesaplanır?",
      "answer": "Birinci zümre (çocuklar) eşit pay alır. Sağ kalan eş, çocuklarla birlikte 1/4, anne-babayla 1/2, büyük anne/babayla 3/4 pay alır.",
      "category": "miras_hukuku",
      "keywords": [
        "miras",
        "pay",
        "hesaplama"
      ]
    },
    "tahliye_sure": {
      "question": "Kiracı tahliyesi ne kadar sürer?",
      "answer": "Tahliye davası 6 ay - 1 yıl sürebilir. Ödeme emri sonrası ödenmezse icra yoluyla tahliye daha hızlı olur.",
      "category": "gayrimenkul",
      "keywords": [
        "tahliye",
        "kiracı",
        "süre"
      ]
    },
    "sirket_sermaye": {
      "question": "Şirket kurmak için ne kadar sermaye gerekir?",
      "answer": "Limited şirket min. 10.000 TL, Anonim şirket min. 50.000 TL sermaye ile kurulur. 1/4'ü peşin ödenmelidir.",
      "category": "ticaret_hukuku",
      "keywords": [
        "şirket",
        "sermaye",
        "kuruluş"
      ]
    },
    "ceza_zamanaşimi": {
      "question": "Ceza davalarında zamanaşımı nedir?",
      "answer": "Suç türüne göre değişir: Hafif suçlar 8 yıl, ağır ceza suçları 15-20+ yıl zamanaşımına tabidir.",
      "category": "ceza_hukuku",
      "keywords": [
        "ceza",
        "zamanaşımı",
        "süre"
      ]
    }
  },
  "fallback_responses": [
    "Hmm, bunu tam anlayamadım. 🤔 Sol menüden bir konu seçebilir veya sorunuzu farklı şekilde yazabilir misiniz?",
    "Bu konuda net bir cevap veremiyorum. Ama size yardımcı olacak doğru avukata yönlendirebilirim. Hangi hukuk alanıyla ilgili?",
    "Sorunuzu anlayamadım. Lütfen 'iş hukuku', 'boşanma', 'ceza davası' gibi anahtar kelimeler kullanın."
  ],
  "quickActions": [
    {
      "id": "is_hukuku",
      "label": "💼 İş Hukuku",
      "intent": "is_hukuku"
    },
    {
      "id": "aile_hukuku",
      "label": "💔 Aile Hukuku",
      "intent": "aile_hukuku"
    },
    {
      "id": "ceza_hukuku",
      "label": "⚖️ Ceza Hukuku",
      "intent": "ceza_hukuku"
    },
    {
      "id": "randevu",
      "label": "📅 Randevu Al",
      "intent": "randevu"
    },
    {
      "id": "acil",
      "label": "🚨 Acil Yardım",
      "intent": "acil_durum"
    }
  ]
};
