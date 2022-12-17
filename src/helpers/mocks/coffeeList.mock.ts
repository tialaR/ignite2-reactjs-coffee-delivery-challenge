import havaiano from '../../assets/images/havaiano.png';
import macchiato from '../../assets/images/macchiato.png';
import expressoGelado from '../../assets/images/expressoGelado.png';
import cubano from '../../assets/images/cubano.png';
import capuccino from '../../assets/images/capuccino.png';
import expressoCremoso from '../../assets/images/expressoCremoso.png';
import irlandes from '../../assets/images/irlandes.png';
import chocolateQuente from '../../assets/images/chocolateQuente.png';
import latte from '../../assets/images/latte.png';
import expressoAmericano from '../../assets/images/expressoAmericano.png';
import arabe from '../../assets/images/arabe.png';
import mocaccino from '../../assets/images/mocaccino.png';
import cafeComLeite from '../../assets/images/cafeComLeite.png';
import expressoTradicional from '../../assets/images/expressoAmericano.png';

export const coffeeList = [
    {
        id: '1',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        especifications: ['especial', 'quente'],
        priceUnit: 9.90,
        quantity: 1,
        image: havaiano,
    },
    {
        id: '2',
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        especifications: ['tradicional', 'com leite'],
        priceUnit: 10.50,
        quantity: 1,
        image: macchiato,
    },
    {
        id: '3',
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        especifications: ['tradicional', 'quente'],
        priceUnit: 14.00,
        quantity: 1,
        image: expressoGelado,
    },
    {
        id: '5',
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        especifications: ['especial', 'alcoólico', 'gelado'],
        priceUnit: 18.45,
        quantity: 1,
        image: cubano,
    },
    {
        id: '6',
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        especifications: ['tradicional', 'com leite'],
        priceUnit: 8.00,
        quantity: 1,
        image: capuccino,
    },
    {
        id: '7',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        especifications: ['tradicional'],
        priceUnit: 6.50,
        quantity: 1,
        image: expressoCremoso,
    },
    {
        id: '8',
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        especifications: ['especial', 'alcoólico'],
        priceUnit: 11.20,
        quantity: 1,
        image: irlandes,
    },
    {
        id: '9',
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        especifications: ['especial', 'com leite'],
        priceUnit: 14.50,
        quantity: 1,
        image: chocolateQuente,
    },
    {
        id: '10',
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        especifications: ['tradicional', 'com leite'],
        priceUnit: 16.00,
        quantity: 1,
        image: latte,
    },
    {
        id: '11',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        especifications: ['tradicional'],
        priceUnit: 6.00,
        quantity: 1,
        image: expressoAmericano,
    },
    {
        id: '12',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        especifications: ['especial'],
        priceUnit: 7.50,
        quantity: 1,
        image: arabe,
    },
    {
        id: '13',
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        especifications: ['tradicional', 'com leite'],
        priceUnit: 11.50,
        quantity: 1,
        image: mocaccino,
    },
    {
        id: '14',
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        especifications: ['tradicional', 'com leite'],
        priceUnit: 11.50,
        quantity: 1,
        image: cafeComLeite,
    },
    {
        id: '15',
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        especifications: ['tradicional'],
        priceUnit: 5.50,
        quantity: 1,
        image: expressoTradicional,
    },
]