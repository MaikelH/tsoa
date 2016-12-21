import { Get } from '../../../src/decorators/methods';
import { Route } from '../../../src/decorators/route';
import { BooleanResponseModel } from '../../fixtures/testModel';
import {ApiKeyHolder} from "../../../src/interfaces/apiKeyHolder";

@Route('ApiKeyGetTest')
export class apiKeyEnabledController implements ApiKeyHolder {
  apiKey: string;

  // Returns true if apikey validation passed successfully
  @Get()
  public async GetWithApikey(): Promise<BooleanResponseModel> {
    return <BooleanResponseModel>{ success: ( this.apiKey == "1234" ) };
  }
}
