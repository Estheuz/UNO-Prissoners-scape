import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { playerDto } from './player.dto';
export declare class PlayerService {
    private yourRepository;
    constructor(yourRepository: Repository<Player>);
    create(createYourDto: playerDto): Promise<Player>;
}
