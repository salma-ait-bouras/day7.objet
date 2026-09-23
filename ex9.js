let scores={math:90, art:70,sport:85}
let subj=["math","art","sport"]
for(i=0;i<subj.length;i++){
    key=subj[i]
    console.log(`${subj[i]} : ${scores[key]}`)
}
