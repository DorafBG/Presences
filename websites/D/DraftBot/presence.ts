var presence = new Presence({
  clientId: "851149129840590858"
});

var browsingStamp = Math.floor(Date.now() / 1000);
var title: any;
var search: any;

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "logo"
  };

  if (document.location.hostname == "draftbot.fr") {
    presenceData.startTimestamp = browsingStamp;
    if (document.location.pathname.includes("/levels/")) {
      title = document.querySelector(
        "#app-mount > div > div > div > div.leaderboardHeader > div.leaderboardHeaderGuildInfo > div.leaderboardGuildName"
      );
      presenceData.details = "Regarde le leaderboard du serveur:";
      presenceData.state = title.innerText;
    } else if (document.querySelector(".pluginTitle") != null) {
      title = document.querySelector(".pluginTitle");
      presenceData.details = "Dashboard - édite:";
      presenceData.state = title.innerText;
      presenceData.smallImageKey = "writing";
    } else if (document.location.pathname.includes("/dashboard/")) {
      title = document.querySelector(".subHeaderMenuListItem.selected");
      presenceData.details = "Dashboard - Regarde:";
      presenceData.state = title.innerText;
    } else if (document.location.pathname.includes("/premium")) {
      presenceData.details = "Regarde à propos du premium";
      presenceData.smallImageKey = "reading";
    } else if (document.location.pathname == "/") {
      presenceData.details = "Accueil";
    } else if (document.location.pathname.includes("/serveurs")) {
      presenceData.details = "Regarde les serveurs où il y a DrafBot";
      presenceData.smallImageKey = "reading";
    } else if (document.location.pathname.includes("/commandes")) {
      presenceData.details = "Regarde les commandes de DraftBot";
      presenceData.smallImageKey = "reading";
    } else if (document.location.pathname.includes("/statuts")) {
      presenceData.details = "Regarde le statut de DratBot";
      presenceData.smallImageKey = "reading";
    } else if (document.location.pathname.includes("/faq")) {
      presenceData.details = "Regarde la F.A.Q.";
      presenceData.smallImageKey = "reading";
    }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});
