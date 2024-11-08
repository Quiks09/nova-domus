import { asyncHandler } from '../../libs/asyncHandler.js';
import { TenantController } from './tenant_controller.js';

export function configureTenantRoutes(router) {
  router.get('/tenants', asyncHandler(TenantController, 'get'));
  router.post('/tenants', asyncHandler(TenantController, 'post'));
  router.patch('/tenants', asyncHandler(TenantController, 'patch'));
  router.delete('/tenants', asyncHandler(TenantController, 'delete'));
}
