
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url:'mongodb://oshani:oshwebsite2@blogwebsite-shard-00-00.tk1oa.mongodb.net:27017,blogwebsite-shard-00-01.tk1oa.mongodb.net:27017,blogwebsite-shard-00-02.tk1oa.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-t9982b-shard-0&authSource=admin&retryWrites=true&w=majority',


    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 