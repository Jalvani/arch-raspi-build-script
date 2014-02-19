function LinkedNotebooks(n,p,k,q){function r(a,c){l&&(clearTimeout(l),l=null);if(a&&a.list&&a.list.length){d=a.list;for(var b=0;b<d.length;b++){var f=d[b];f&&f.shardId?g[f.shardId]||(g[f.shardId]=new JsonRpc(f.shardId,["NoteStore.getSharedNotebookByAuth","NoteStore.authenticateToSharedNotebook","NoteStore.listLinkedNotebooks"]),g[f.shardId].initWithAuthToken(z)):log.warn("No shard found for notebook, not initializing.")}for(b=0;b<d.length;b++)A(d[b])}else c&&(/AUTH_EXPIRED/.test(c.trace)&&/parameter:authenticationToken/.test(c.trace)?
q&&(Browser.extension.getBackgroundPage().extension.msgHandlerLogout({}),Browser.sendToTab(q,{name:"tellUserToLogin"})):console.debug(c)),k&&k()}function s(a,c,b){if(!t[a]){t[a]=!0;c||log.warn("Received no data for notebook "+a);b||log.warn("Received no auth for notebook "+a);if(c&&b)for(a=0;a<d.length;a++)if(b.shareKey&&d[a].shareKey===b.shareKey){if(!b.notebookModifiable)break;d[a].businessId!=n.businessId?h.push([a,c,b]):u[b.notebookGuid]=d[a];break}e()}}function e(){v++;v==d.length&&k&&k()}function w(a,
c,b){x[a]||(x[a]=!0,c?(b=c.authenticationToken.match(/^"?S=([^:]+)/))&&b[1]?(b=b[1],g[b]?(g[b].client.NoteStore.getSharedNotebookByAuth(function(b){s(a,c.authenticationToken,b)},c.authenticationToken),setTimeout(function(){s(a)},m)):(log.warn("Got auth indicating shard '"+b+"' but don't have a corresponding JsonRpc object."),e())):(log.warn("Auth token doesn't contain shard info. Token: "+c.authenticationToken),e()):e())}function A(a){var c=g[a.shardId];c?a?a.shareKey?(c.client.NoteStore.authenticateToSharedNotebook(function(b,
c){w(a.guid,b,c)},a.shareKey,c.authToken),setTimeout(function(){w(a.guid)},m)):e():(log.warn("Can't authenticate null notebook."),e()):(log.warn("No RPC object for shard: "+a.shardId),e())}function y(){for(var a={count:0},c=0;c<h.length;c++){var b=h[c][2].notebookGuid,f=h[c][2].shareKey,e=d[h[c][0]].shareName,g=d[h[c][0]].username,k=h[c][1];a[b]?log.warn("Already have entry for notebook "+b+", which implies duplicate. Will be overwritten."):a.count++;a[b]={};a[b].name=e;a[b].owner=g;a[b].auth=k;a[b].guid=
b;a[b].shareKey=f}return a}var m=1E4,v=0,d=[],h=[],u={},g={},l=null,x={},t={},z=n.token;p.client.NoteStore.listLinkedNotebooks(r,p.authToken);l=setTimeout(r,m);this.getWritableLinkedNotebooks=y;this.getWritableLinkedNotebookByGuid=function(a){a=a.replace(/^shared_/,"");var c=y();return c[a]?c[a]:null};this.getBusinessNotebookByGuid=function(a){return u[a]};Object.preventExtensions(this)}Object.preventExtensions(LinkedNotebooks);
