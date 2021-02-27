module.exports = async (client) => {
  console.log(`[ ${client.user.username} ] is ready`);
  await client.user.setActivity("Music", {
    type: "LISTENING",
  });
  await client.user.setStatus('idle')
};
