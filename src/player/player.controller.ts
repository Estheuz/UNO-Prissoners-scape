import { Controller, Post, Body } from '@nestjs/common';
import { playerDto } from './player.dto';
import { PlayerService } from './player.service'


@Controller('player')
export class PlayerController { //Finish CRUD Functions later
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async create(@Body() playerDTO: playerDto) {
    return this.playerService.create(playerDTO);
  }
}
