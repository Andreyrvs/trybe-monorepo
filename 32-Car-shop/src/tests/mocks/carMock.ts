import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
	model: "VolksWagen",
	year: 1999,
	color: "red",
	status: true,
	buyValue: 20000,
	doorsQty: 2,
	seatsQty: 4,
}

const carMockWithId: ICar & {_id:string} = {
  _id: "63223c027b9f8dfbb98ea5f0",
	model: "VolksWagen",
	year: 1999,
	color: "red",
	status: true,
	buyValue: 20000,
	doorsQty: 2,
	seatsQty: 4,
}

export { carMock, carMockWithId }