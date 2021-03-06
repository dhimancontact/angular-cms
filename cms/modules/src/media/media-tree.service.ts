import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MediaService, Media } from '@angular-cms/core';
import { TreeService } from '../shared/tree/tree-service';
import { TreeNode } from '../shared/tree/tree-node';

@Injectable()
export class MediaTreeService implements TreeService {

    constructor(private mediaService: MediaService) { }

    getNode(nodeId: string): Observable<TreeNode> {
        return this.mediaService.getMediaFolder(nodeId).map(x => new TreeNode({
            id: x._id,
            name: x.name,
            hasChildren: x.hasChildren,
            parentId: x.parentId,
            parentPath: x.parentPath
        }));
    }

    loadChildren(parentNodeId: string): Observable<TreeNode[]> {
        return this.mediaService.getMediaFolders(parentNodeId).map((res: Media[]) => {
            return res.map(x => new TreeNode({
                id: x._id,
                name: x.name,
                hasChildren: x.hasChildren,
                parentId: x.parentId,
                parentPath: x.parentPath
            }));
        });
    }
}