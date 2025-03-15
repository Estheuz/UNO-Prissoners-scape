import { Player } from './player.entity';
import { playerDto } from './player.dto';
import { PlayerService } from './player.service';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    create(playerDTO: playerDto): Promise<Player>;
}
