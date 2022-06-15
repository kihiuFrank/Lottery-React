import web3 from "./web3";

const address = '0x157071230237f106071a81c30941D4483766C70C';

const abi = [
  {
      inputs: [], stateMutability: 'nonpayable', type: 'constructor'
  },
  {
      inputs: [],
      name: 'enter',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
  },
  {
      inputs: [],
      name: 'getPlayers',
      outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
      stateMutability: 'view',
      type: 'function'
  },
  {
      inputs: [],
      name: 'manager',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
  },
  {
      inputs: [],
      name: 'pickWinner',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
  },
  {
      inputs: [{
          internalType: 'uint256', name: '', type: 'uint256'
      }],
      name: 'players',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function'
  }
];

const contract = new web3.eth.Contract(abi, address);
export default contract;

//Intial ABI before getting the entire object using util.inspect 
/*
const abi = [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
      constant: undefined,
      payable: undefined,
      signature: 'constructor'
    },
    {
      inputs: [],
      name: 'enter',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      constant: undefined,
      payable: true,
      signature: '0xe97dcb62'
    },
    {
      inputs: [],
      name: 'getPlayers',
      outputs: [[Object]],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0x8b5b9ccc'
    },
    {
      inputs: [],
      name: 'manager',
      outputs: [[Object]],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0x481c6a75'
    },
    {
      inputs: [],
      name: 'pickWinner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      constant: undefined,
      payable: undefined,
      signature: '0x5d495aea'
    },
    {
      inputs: [[Object]],
      name: 'players',
      outputs: [[Object]],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0xf71d96cb'
    }
  ];
  */