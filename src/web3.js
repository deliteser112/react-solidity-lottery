/* Importamos Web3 que instalamos en nuestro proyecto npm */
import Web3 from 'web3';

/* Solicitamos el proveedor de Web3 de window. en este caso es el de Metamask instalado en el navegador */
const web3 = new Web3(window.web3.currentProvider);

/* Exportamos nuestra instancia para usar en React */
export default web3;

