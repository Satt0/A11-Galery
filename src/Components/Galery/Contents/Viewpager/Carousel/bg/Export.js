const girl=[]
for(let i=0;i<25;i++)
{
    girl.push({src:require(`./girl/girl${i+1}.JPG`)})
}
const teacher=[]
for(let i=0;i<3;i++)
{
    teacher.push({src:require(`./teacher/teacher${i+1}.JPG`)})
}

const leader=[]
for(let i=0;i<4;i++)
{
    leader.push({src:require(`./leader/leader${i+1}.JPG`)})
}
const boy=[]
boy.push({src:require('./boy/boy1.jpg')})

export default {
    girl:girl,
    boy:girl,
    teacher:teacher,
    leader:leader
}

