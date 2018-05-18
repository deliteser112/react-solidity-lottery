/* Llamamos a nuestra instancia de web3 */
import web3 from './web3';

/* Dirección del contrato deploy en la red de prueba Rinkeby */
const address = '0x1D3A7fEc8C06fa5F2Efa0285Fbeb561b933C8457';

/* El ABI lo obtenemos en la consulta una vez hecho el deploy */
const abi = [
    {
      constant: true,
      inputs: [],
      name: 'manager',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'pickWinner',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getPlayers',
      outputs: [{ name: '', type: 'address[]' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'enter',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ name: '', type: 'uint256' }],
      name: 'players',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    }
  ];

export default new web3.eth.Contract(abi, address);
