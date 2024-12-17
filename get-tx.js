import axios from 'axios';

let txHash = 'CCA3D078FB876936BD1D3BC045A654AE27B053F554F5041CCE3BFE3BA6491B4C';

let apiEnpoint = 'https://api.constantine.archway.tech';
axios.get(apiEnpoint + '/cosmos/tx/v1beta1/txs/' + txHash)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });