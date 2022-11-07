import mongoose from 'mongoose';


const Connection = async () => {
   try{
     const URL = 'mongodb://oshani:oshwebsite2@blogwebsite-shard-00-00.tk1oa.mongodb.net:27017,blogwebsite-shard-00-01.tk1oa.mongodb.net:27017,blogwebsite-shard-00-02.tk1oa.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-t9982b-shard-0&authSource=admin&retryWrites=true&w=majority';
      
      await mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology:true ,useFindAndModify:false});
       console.log('Database connected successfully');
  } catch(error) {
      console.log('Error while connecting to MongoDB ', error);
  }

}


export default Connection;