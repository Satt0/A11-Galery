const girl=[]
for(let i=0;i<11;i++)
{
    girl.push({src:require(`./girl/girl${i+1}.JPG`)})
}
const teacher=[]
for(let i=0;i<3;i++)
{
    teacher.push({src:require(`./teacher/teacher${i+1}.JPG`)})
}

const leader=[]
for(let i=0;i<6;i++)
{
    leader.push({src:require(`./leader/leader${i+1}.JPG`)})
}


export default {
    girl:girl,
    boy:girl,
    teacher:teacher,
    leader:leader
}

