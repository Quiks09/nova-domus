import { asyncHandler } from '../../libs/asyncHandler.js';
import { EstateController } from './estate_controller.js';

export function configureEstateRoutes(router) {
  router.get('/inmuebles', asyncHandler(EstateController, 'get'));
  router.post('/inmuebles', asyncHandler(EstateController, 'post'));
}
