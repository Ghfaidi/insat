import { Controller, Get, UseInterceptors,UploadedFile, BadRequestException} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { Module } from '@nestjs/common';
import { Param, Post, Body } from '@nestjs/common';
import path from 'path';
import { diskStorage } from 'multer';
@Controller('prof')
@UseInterceptors(FileInterceptor('file',{storage: diskStorage({
  destination: './uploadedFiles'
}),fileFilter: (request, file, callback) => {
  const ext = path.extname(file.originalname);
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.pdf') {
    return callback(new Error('Only images and pdf files are valid'),false);
  }}}))

export class ProfController {
    @Post('uploadAffichage')
    uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body){

      console.log(file)
    }
    @Post('uploadCourse')
    uploadCourse(@UploadedFile() file, @Body() body){
    }

}