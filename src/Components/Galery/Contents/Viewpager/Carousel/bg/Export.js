const girl=[]
for(let i=0;i<31;i++)
{
    girl.push({src:require(`./girl/girl${i+1}.JPG`)})
}
const teacher=[]
for(let i=0;i<5;i++)
{
    teacher.push({src:require(`./teacher/teacher${i+1}.JPG`)})
}

const leader=[]
for(let i=0;i<7;i++)
{
    leader.push({src:require(`./leader/leader${i+1}.JPG`)})
}
const boy=[]
for(let i=0;i<7;i++)
{
    boy.push({src:require(`./boy/boy${i+1}.JPG`)})
}

export default {
    girl:girl,
    boy:boy,
    teacher:teacher,
    leader:leader
}

