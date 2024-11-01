import React from 'react'
import { useState } from 'react';

const { REACT_APP_TARGET_API_KEY, REACT_APP_WM_CONSUMER_ID } = process.env;

function APITest() {

  const productResults = {
    "request_info": {
      "success": true,
      "credits_used": 1,
      "credits_remaining": 999
    },
    "request_metadata": {
      "created_at": "2020-01-01T00:00:00.000Z",
      "processed_at": "2020-01-01T00:00:00.001Z",
      "total_time_taken": 0.1,
      "target_url": "https://www.target.com/p/-/A-78025470"
    },
    "request_parameters": {
      "type": "product",
      "tcin": "78025470"
    },
    "product": {
      "tcin": "78025470",
      "title": "Sharpie Pocket 4pk Highlighters Narrow Chisel Tip Multicolored",
      "link": "https://www.target.com/p/sharpie-pocket-4pk-highlighters-narrow-chisel-tip-multicolored/-/A-78025470",
      "brand": "Sharpie",
      "brand_link": "https://www.target.com/b/sharpie/-/N-56cak",
      "upc": "071641174603",
      "dpci": "081-02-3451",
      "rating": 4.7,
      "ratings_total": 233,
      "ingredients": "PURIFIED WATER, MAGNESIUM SULFATE, POTASSIUM CHLORIDE, SALT.*+ *ADDS A NEGLIGIBLE AMOUNT OF SODIUM, +MINERALS ADDED FOR TASTE",
      "servings": 24,
      "nutrients": [
        {
          "name": "Calories",
          "quantity": 0,
          "unit": "Cal"
        },
        {
          "name": "Total Fat",
          "quantity": 0,
          "unit": "g"
        },
        {
          "name": "Sodium",
          "quantity": 0,
          "unit": "mg"
        },
        {
          "name": "Total Carbohydrate",
          "quantity": 0,
          "unit": "g"
        },
        {
          "name": "Protein",
          "quantity": 0,
          "unit": "g"
        }
      ],
      "main_image": {
        "link": "https://target.scene7.com/is/image/Target/GUEST_dd2740a1-b9a7-4a4f-906d-3244ff2b517e"
      },
      "images": [
        {
          "link": "https://target.scene7.com/is/image/Target/GUEST_dd2740a1-b9a7-4a4f-906d-3244ff2b517e"
        },
        {
          "link": "https://target.scene7.com/is/image/Target/GUEST_29507d0a-f7ee-483e-b6c1-72237ea26e7a"
        },
        {
          "link": "https://target.scene7.com/is/image/Target/GUEST_a6980245-9cab-435d-8469-4f01064e04b8"
        },
        {
          "link": "https://target.scene7.com/is/image/Target/GUEST_3680fd7d-ecec-40a9-a13d-7722546532ca"
        }
      ],
      "videos": [
        {
          "link": "https://target.scene7.com/is/content/Target/GUEST_75fa3d67-3821-4e47-8ddf-14aa56078d75_Flash9_Autox720p_2600k",
          "type": "video/mp4"
        },
        {
          "link": "https://target.scene7.com/is/content/Target/GUEST_0bf20858-cdf8-4e8a-bdc6-723433b97c61_Flash9_Autox720p_2600k",
          "type": "video/mp4"
        }
      ],
      "specifications": [
        {
          "name": "Dimensions (Overall)",
          "value": "4.0 Inches (H) x 2.5 Inches (W) x 2.75 Inches (D)"
        },
        {
          "name": "Weight",
          "value": ".25 ounces"
        },
        {
          "name": "Mount Type",
          "value": "Vent Mount"
        },
        {
          "name": "Material",
          "value": "Plastic"
        },
        {
          "name": "Warranty",
          "value": "1 Year Limited Warranty. To obtain a copy of the manufacturer's or supplier's warranty for this item prior to purchasing the item, please call Target Guest Services at 1-800-591-3869"
        }
      ],
      "specifications_flat": "Warranty: 1 Year Limited Warranty. To obtain a copy of the manufacturer's or supplier's warranty for this item prior to purchasing the item, please call Target Guest Services at 1-800-591-3869. Material: Plastic. Mount Type: Vent Mount. Weight: .25 ounces. Dimensions (Overall): 4.0 Inches (H) x 2.5 Inches (W) x 2.75 Inches (D).",
      "description": "Draw attention to important information in notes, text and documents with Sharpie Accent Highlighters. The 4 bright fluorescent colors make it easy to read highlighted text and emphasize important passages. Sharpie highlighters dry quickly and resist smearing of many pen and marker inks (let ink dry before highlighting). Includes pink, yellow, orange and blue highlighters. ",
      "feature_bullets": [
        "Bright, easy-to-see colors make your highlighted text easy to read",
        "Resists smearing of many pen and marker inks (let ink dry before highlighting)",
        "Easy-glide, narrow chisel tip is great for highlighting, underlining or writing notes",
        "Slim shape is easy to control and slips into backpacks or notebooks",
        "Includes: Fluorescent Pink, Yellow, Orange and Blue highlighters"
      ],
      "aisle": "C76",
      "weight": "0.14 pound",
      "dimensions": "0.71 inch (H) x 3.73 inch (W) x 7.61 inch (D)",
      "buybox_winner": {
        "price": {
          "value": 2.89,
          "currency_symbol": "$",
          "currency": "USD"
        },
        "availability": {
          "raw": "IN_STOCK",
          "in_stock": true
        },
        "fulfillment": {
          "type": "1p",
          "pickup": true,
          "pickup_info": {
            "ready_in_minutes": 120,
            "stock_level": 8,
            "store_id": "1544",
            "store_name": "Stamford",
            "store_address": "21 Broad St",
            "store_city": "Stamford",
            "store_state": "Connecticut",
            "store_zipcode": "06901-2309",
            "store_timezone": "America/New_York"
          },
          "delivery_from_store": true,
          "shipping": true,
          "shipping_info": {
            "stock_level": 20,
            "services": [
              {
                "name": "Standard",
                "description": "2-day shipping",
                "is_default": true,
                "cutoff_time": "2022-04-25T16:00:00Z",
                "delivery_date": "2022-04-27"
              }
            ]
          }
        }
      },
      "variants": [
        {
          "tcin": "80944742",
          "dpci": "249-05-0062",
          "upc": "191908446738",
          "title": "Futon Sofa with Arms Charcoal Gray - Room Essentials",
          "link": "https://www.target.com/p/futon-sofa-with-arms-charcoal-gray-room-essentials-8482/-/A-80944742",
          "main_image": "https://target.scene7.com/is/image/Target/GUEST_75355849-d52d-4d67-ab5e-c53555509118",
          "swatch_image": "https://target.scene7.com/is/image/Target/GUEST_ba8394de-9ca0-42d6-8786-e61980a930db",
          "price": {
            "value": 240,
            "currency_symbol": "$",
            "currency": "USD"
          }
        },
        {
          "tcin": "53214563",
          "dpci": "249-05-0199",
          "upc": "672975504878",
          "title": "Futon Sofa With Arms Light Gray - Room Essentials",
          "link": "https://www.target.com/p/futon-sofa-with-arms-light-gray-room-essentials-8482/-/A-53214563",
          "main_image": "https://target.scene7.com/is/image/Target/GUEST_36d5db84-693e-4593-9694-710bae4f2263",
          "swatch_image": "https://target.scene7.com/is/image/Target/GUEST_fc5ac11c-d07a-4816-b66d-e0e6cb9f98a0",
          "price": {
            "value": 340,
            "currency_symbol": "$",
            "currency": "USD"
          }
        }
      ],
      "top_reviews": [
        {
          "position": 1,
          "id": "6cc7ed6a-e56d-43e5-b5c2-b4277b336134",
          "title": "Delicious!",
          "body": "This espresso is delicious! I have used Nespresso’s Single Origin capsules for years because of their taste and quality, and thought I’d give this a try since it was quite a bit cheaper. I’m going to switch to this as my go-to Espresso! I hope Target adds more to their Single Origin lineup!",
          "date": "2022-03-22T17:08:46.416Z",
          "rating": 5,
          "source": {
            "is_external_source": false,
            "author_name": "Avery",
            "author_id": "1999777574",
            "verified_purchase": false
          }
        },
        {
          "position": 2,
          "id": "eb2abd4b-e9fe-4f64-b211-0d8731bf969b",
          "title": "Delicious and affordable!",
          "body": "These were the first store brand Nespresso capsules I’ve ever tried. I was very hesitant. They’re so delicious!",
          "date": "2022-02-24T03:51:20.194Z",
          "rating": 5,
          "source": {
            "is_external_source": false,
            "author_name": "Nico",
            "author_id": "2629062174",
            "verified_purchase": false
          }
        }
      ]
    },
    "location_info": {
      "address": "919 Highway D",
      "city": "Osage Beach",
      "state": "Missouri",
      "zipcode": "65065-3169",
      "store_name": "Osage Beach",
      "store_id": "1914"
    }
  }

  let targetAPIKey = REACT_APP_TARGET_API_KEY;
  let store = 'none';

  const [urlEntry, setUrlEntry] = useState('');
  const [titleEntry, setTitleEntry] = useState('');
  const [priceEntry, setPriceEntry] = useState('');
  const [descEntry, setDescEntry] = useState('');

  async function urlHandler(e) {
    e.preventDefault();

    let url = new URL(urlEntry);

    console.log(url.pathname);

    let pathArray = url.pathname.split('/')

    if(url.hostname.split('.').includes('target')) {
      console.log('target!!!!!!!!');

      let itemNumber = pathArray[pathArray.indexOf('-') + 1].slice(2);

      console.log(itemNumber);

      try {

      } catch (error) {
        console.log(error);
      }
    };
    if(url.hostname.split('.').includes('amazon')) {
      console.log('amazon!!!!!!!!');
    };
    if(url.hostname.split('.').includes('walmart')) {
      console.log('walmart!!!!!!!!');

      let itemNumber = pathArray[pathArray.length-1];

      console.log(itemNumber);

      let headersStorage = {};

      // local server call
      try {
        let response = await fetch(
          `http://localhost:4000/user/test`,
          {
            headers: new Headers({
              "content-type": "application/json",
            }),
            method: "POST",
            body: JSON.stringify({
              "ver": "1",
              "cid": REACT_APP_WM_CONSUMER_ID
            }),
          }
        );

        let results = await response.json();

        console.log(results);

        headersStorage = results.headers;

      } catch (error) {
        console.log(error);
      }

      console.log("##########results", headersStorage);

      // walmart api call
      try {
        let response = await fetch(`https://developer.api.walmart.com/api-proxy/service/affil/product/v2/items?upc=463062932`,
        {
          headers: new Headers({
            ...headersStorage,
            "content-type": "application/json"
          })
        })

        let results = await response.json();

        console.log(results);

      } catch (error) {
        console.log(error);
      }

    };
    if(url.hostname.split('.').includes('bestbuy')) {
      console.log('bestbuy!!!!!!!!');
    };
    if(url.hostname.split('.').includes('etsy')) {
      console.log('etsy!!!!!!!!');
    };

  };

  return (
    <div>
      <form>
        <label htmlFor="urlField">Enter URL:</label>
        <br />
        <input
          type="text"
          placeholder={REACT_APP_WM_CONSUMER_ID}
          name='urlField'
          onChange={(e) => {
            setUrlEntry(e.target.value);
          }}
        />
        <br />
        <button
          type='submit'
          onClick={urlHandler}
        >Clickity Click!</button>
      </form>
      <br />
      <form>
          <label htmlFor="titleField">Title:</label>
          <br />
          <input
            type="text"
            placeholder='TITLE HERE'
            name='titleField'
            value={titleEntry}
          />
          <br />
          <label htmlFor="priceField">Price:</label>
          <br />
          <input
            type="text"
            placeholder='PRICE HERE'
            name='priceField'
            value={priceEntry}
          />
          <br />
          <label htmlFor="descField">Description:</label>
          <br />
          <input
            type="textarea"
            placeholder='DESCRIPTION HERE'
            name='descField'
            value={descEntry}
          />
          <br />
      </form>
    </div>
  )
}

export default APITest