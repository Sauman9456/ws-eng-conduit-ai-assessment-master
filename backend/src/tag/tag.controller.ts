import { Get, Body, Controller, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import { ITagsRO } from './tag.interface';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto';

@ApiBearerAuth()
@ApiTags('tags')
@Controller('tags')
export class TagController {

  constructor(private readonly tagService: TagService) {}

  @Get()
  async findAll(): Promise<ITagsRO> {
    return this.tagService.findAll();
  }

  @Post()
  async create(@Body() createTagDto: CreateTagDto): Promise<void> {
    return this.tagService.ensureTagExists(createTagDto.tag);
  }

}
