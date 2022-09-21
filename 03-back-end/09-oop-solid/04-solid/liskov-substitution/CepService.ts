// ./CepService.ts
import { ICepAPI } from './CepAPIs';

class CepService {
  constructor(private cepApi: ICepAPI) {}

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;
