nosex=0
nosey=0
difference=0
rightx=0
leftx=0
function setup(params) {
    video=createCapture(VIDEO)
    video.size(550,500)
    video.position(200,100)

    canvas=createCanvas(550,500)
    canvas.position(800,100)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function modelLoaded(params) {
    console.log("poseNet inicio")
}
function draw(params) {
    background("#0471b5")
    document.getElementById("square_side").innerHTML="a altura e a largura seram : "+difference +"px"
    fill("#F90093")
    stroke("#F90093")
    square(nosex,nosey,difference)

}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        console.log("nosex="+nosex+"nosey="+nosey)
        leftx=results[0].pose.leftWrist.x
        rightx=results[0].pose.rightWrist.x
        difference=leftx-rightx
    }
}
