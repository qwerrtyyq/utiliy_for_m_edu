player.onItemInteracted(CLOCK, function () {
    player.say("Сейчас время: " + gameplay.timeQuery(GAME_TIME))
})
player.onChat("Time now", function () {
    agent.teleportToPlayer()
    player.say("Сейчас время: " + gameplay.timeQuery(GAME_TIME))
})
