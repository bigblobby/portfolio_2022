import type { NextApiRequest, NextApiResponse } from 'next'
import {Octokit} from 'octokit';

type RepoData = {
    name: string,
    description: string|null,
    owner: string,
    projectUrl: string,
    siteUrl: string|null
}

type Response = {
    data: RepoData[]
}

const octokit = new Octokit({
    auth: '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'
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {

    const repoNames = ['image_optimiser', 'down_detector_backend', 'gf_loose_reins']
    const repos = repoNames.map(async (name) => {
        const repo = await octokit.request('GET /repos/{owner}/{repo}', {
            owner: 'bigblobby',
            repo: name
        });

        return {
            name: repo.data.name,
            description: repo.data.description,
            owner: repo.data.owner.login,
            projectUrl: repo.data.html_url,
            siteUrl: name === 'image_optimiser' ? 'https://www.ihateimages.com' : null
        }
    })

    const resolvedRepos = await Promise.all(repos);
    res.status(200).json({data: resolvedRepos});
}