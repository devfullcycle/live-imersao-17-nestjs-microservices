import { Test, TestingModule } from '@nestjs/testing';
import { CheckoutsService } from './checkouts.service';

describe('CheckoutsService', () => {
  let service: CheckoutsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckoutsService],
    }).compile();

    service = module.get<CheckoutsService>(CheckoutsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
