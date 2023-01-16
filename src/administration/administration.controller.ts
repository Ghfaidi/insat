import { Controller,Post,UploadedFile,BadRequestException,UseInterceptors,Body}from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { get } from 'http';
import { diskStorage } from 'multer';
import path from 'path';

@Controller('administration')
@UseInterceptors(FileInterceptor('file',{storage: diskStorage({
    destination: './uploadedFiles'
  }),fileFilter: (request, file, callback) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.pdf') {
      return callback(new Error('Only images and pdf files allowed'),false);
    }}}))
export class AdministrationController{
    @Post()
    uploadFile(@UploadedFile() file, @Body() body ){
      console.log(file)
    }
}