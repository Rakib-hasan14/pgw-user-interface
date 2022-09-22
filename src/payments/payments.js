
// const got = require('got');
// const axios = require('axios');
// const qs = require('qs');
// const SSLCommerzPayment = require('sslcommerz-lts')
// const store_id = 'rakib6328843c28edf'
// const store_passwd = 'rakib6328843c28edf@ssl'
// const is_live = false //true for live, false for sandbox



// export const sslCommerzPayment = () => {
//     const data = {
//         total_amount: 100,
//         currency: 'BDT',
//         tran_id: 'REF123', // use unique tran_id for each api call
//         success_url: 'http://localhost:3000/success',
//         fail_url: 'http://localhost:3000/fail',
//         cancel_url: 'http://localhost:3000/cancel',
//         ipn_url: 'http://localhost:3000/ipn',
//         shipping_method: 'Courier',
//         product_name: 'Computer.',
//         product_category: 'Electronic',
//         product_profile: 'general',
//         cus_name: 'Customer Name',
//         cus_email: 'customer@example.com',
//         cus_add1: 'Dhaka',
//         cus_add2: 'Dhaka',
//         cus_city: 'Dhaka',
//         cus_state: 'Dhaka',
//         cus_postcode: '1000',
//         cus_country: 'Bangladesh',
//         cus_phone: '01711111111',
//         cus_fax: '01711111111',
//         ship_name: 'Customer Name',
//         ship_add1: 'Dhaka',
//         ship_add2: 'Dhaka',
//         ship_city: 'Dhaka',
//         ship_state: 'Dhaka',
//         ship_postcode: 1000,
//         ship_country: 'Bangladesh',
//     };

//     const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
//     sslcz.init(data).then(res => {
//         // Redirect the user to payment gateway
//         let GatewayPageURL = res.GatewayPageURL
//         res.redirect(GatewayPageURL)
//         console.log('Redirecting to: ', GatewayPageURL)
//     });
// }

 
//   let post_body = {};
//   post_body['store_id'] = store_id;
//   post_body['store_passwd'] = store_passwd;
//   post_body['total_amount'] = 100.26;
//   post_body['currency'] = "BDT";
//   post_body['tran_id'] = "1234";
//   post_body['success_url'] = "https://tigrow.herokuapp.com";
//   post_body['fail_url'] = "your fail url";
//   post_body['cancel_url'] = "your cancel url";
//   post_body['emi_option'] = 0;
//   post_body['cus_name'] = "nizam";
//   post_body['cus_email'] = "test@test.com";
//   post_body['cus_phone'] = "01700000000";
//   post_body['cus_add1'] = "customer address";
//   post_body['cus_city'] = "Dhaka";
//   post_body['cus_country'] = "Bangladesh";
//   post_body['shipping_method'] = "NO";
//   post_body['multi_card_name'] = ""
//   post_body['num_of_item'] = 1;
//   post_body['product_name'] = "Test";
//   post_body['product_category'] = "Test Category";
//   post_body['product_profile'] = "general";



//   const urlParams = null;

//   const url = 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php';

//  export async function start() {
//     try{
//         let params = {
//           method: 'POST',
//           form:  post_body ,
//           responseType: 'json'
//         };
//        // params.searchParams = urlParams ? urlParams : undefined;
//         params.form = post_body ? post_body : undefined;
//        // const response = await got(url, params);
//        //console.log(response.body);

//         const response = await axios(url, {method: 'POST', data: qs.stringify(post_body)});
//         console.log(response.data);
        
//         //fetch
//         //  fetch(url, {method: 'POST', body: fdata})
//         //   .then(function(u){ 
//         //       return u.json();
//         //   })
//         //   .then(function(j) { 
//         //       console.log(1,j); 
//         //   });
        
        
//       } catch(error){
//         console.log(error) ;
//     }
//   }

    
