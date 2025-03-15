import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { playerDto } from './player.dto';

@Injectable()
export class PlayerService {//Finish CRUD Functions later
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  async create(createYourDto: playerDto): Promise<Player> {
    const newEntity = this.playerRepository.create(createYourDto);
    return this.playerRepository.save(newEntity);
  }
}
