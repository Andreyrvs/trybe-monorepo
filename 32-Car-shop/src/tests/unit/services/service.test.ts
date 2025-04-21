import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { ZodError} from 'zod'
import CarModel from '../../../models/Car'
import CarService from '../../../services/Car'
import { carMock, carMockWithId} from '../../mocks/carMock'
import { ErrorTypes } from '../../../errors/catalog';

describe('Cars Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'readOne')
    .onCall(0).resolves(carMockWithId)
    .onCall(1).resolves(null)
    .onCall(2).resolves(null);
  sinon.stub(carModel, 'read').resolves([carMockWithId])
  });

  after(()=>{
    sinon.restore();
  })

  describe('Cria um carro', () => {
    it('Com sucesso', async () => {
      const carCreated = await carService.create(carMock);
      expect(carCreated).to.be.deep.equal(carMockWithId);
    });
    it('Quando Falha', async () => {
      let error;
      try {
        await carService.create({})
      } catch (err) {
        error = err
      }
      expect(error).to.be.instanceOf(ZodError)
    });
  });

  describe('Busca todos carros', () => {
    it('Success', async () => {
      const frames = await carService.read();
      expect(frames).to.be.deep.equal([carMockWithId]);
    });
  });

  describe('Busca um carro pelo seu id', () => {
    it('Com sucesso', async () => {
      const frameCreated = await carService.readOne(carMockWithId._id);
      expect(frameCreated).to.be.deep.equal(carMockWithId);
    });

  //   it('Tem menos de 24 caracteres', async () => {
  //     let error;
  //     try {
  //       await carService.readOne('999')
  //     } catch (err) {
  //       error = err
  //     }

  //     expect(error).to.be.deep.equal(ErrorTypes.InvalidMongoId);
  //   });

  //   it('Objeto invalido', async () => {
  //     let error;
  //     try {
  //       await carService.readOne('999999999999999999999999')
  //     } catch (err) {
  //       error = err
  //     }

  //     expect(error).to.be.deep.equal(ErrorTypes.ObjectNotFound);
  //   });
  });

});