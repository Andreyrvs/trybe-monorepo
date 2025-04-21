import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarModel from '../../../models/Car';
import { ICar } from '../../../interfaces/ICar';
const { expect } = chai;

describe('Cars Model', () => {
  const carModel = new CarModel()
  const carList = [carMockWithId,  {
    _id: '999999999999999999999999',
    model: "Homer",
    year: 1999,
    color: "gray",
    buyValue: 1000,
    seatsQty: 2,
    doorsQty: 2,
  }]

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carList);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Cria um carro', () => {
    it('Cria com sucesso', async () => {
      const newCar = await carModel.create(carMock)
      expect(newCar).to.be.deep.equal(carMockWithId)
    });
  })

  describe('Busca todos carros', () => {
    it('Acha com sucesso', async () => {
      const framesFound = await carModel.read();
      expect(framesFound).to.be.an('array');
      framesFound?.forEach((frame: ICar, index: number) => {
        expect(frame).to.be.deep.equal(carList[index])
      });
    })

    it('_id  não encontrado', async () => {
      try {
        await carModel.read();
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('Busca um carro pelo seu id', () => {
    it('Acha com sucesso', async () => {
      const framesFound = await carModel.readOne('632361808341b1632896fd52');
      expect(framesFound).to.be.deep.equal(carMockWithId);
    })

    it('_id não encontrado', async () => {
      try {
        await carModel.readOne('BATATINHA123');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});