# Casewise recovery status

## Verified development workflow

Use Node.js 22 or newer and Yarn Classic 1.22.22:

```sh
cd frontend
corepack yarn@1.22.22 install --frozen-lockfile --non-interactive
corepack yarn@1.22.22 lint
corepack yarn@1.22.22 build
corepack yarn@1.22.22 dev --host 0.0.0.0
```

In the managed cloud environment set `COREPACK_HOME=/workspace/.cache/corepack`
before these commands because the default home cache may not be writable.

The React app searches five example records, not official judgments. Type-only
imports now satisfy the existing TypeScript configuration. Relative build and
data paths support a GitHub Pages project subdirectory without a custom domain.

## GitHub Pages

The Pages workflow builds only `frontend/dist`; Python source and training data
are excluded from the public artifact. It runs lint and production build before
uploading. In repository Settings > Pages, select GitHub Actions as the source.
The repository is currently private; do not change its visibility automatically.
GitHub's plan must support Pages for private repositories. A publicly accessible
Pages site exposes its bundled frontend and the five example records.

The current integration can read Git but returns HTTP 403 for Pages management.
The workflow is prepared; no successful remote deployment has been verified.
Do not infer the deployment URL until GitHub reports a successful deployment.

## Python investigation

The root README's description of a Python web backend is not implemented:

- `backend/src/resource/api.py` is empty.
- `backend/src/main/java/main.java` is only a Hello World program.
- The runnable-looking component is the vendored Streamlit experiment at
  `backend/src/resource/Text-summarization-project-master/src/infer.py`.
- It loads `kobart_summary` through `from_pretrained`, but no such model directory
  or model weights are checked in. The original tokenizer uses the `kobart`
  package, which is not declared by the legacy requirements file.
- The experiment expects both document text and a reference summary. It generates
  a summary and calculates ROUGE; it is not a case-search API.
- Legacy pins include torch 1.7.1, transformers 4.3.3, Streamlit 0.72.0, and
  pytorch-lightning 1.1.0. Do not install this stack into the Python 3.12 runtime
  or silently replace the missing checkpoint with a different model.

Before restoring AI inference, recover the original trained model and tokenizer
with provenance, licensing, and integrity information, or explicitly select a
replacement model. Then port inference to an isolated supported Python runtime,
validate Korean legal-text outputs and resource use, and expose a server API.
GitHub Pages cannot execute Python, store server secrets, or host that API.
Serving the frontend does not establish recovery of AI functionality.

## Remaining work

The requested full UI redesign has not been performed. The required 12ui design
tool installed successfully but its hosted generation requires sign-in and could
not reach its sign-in service under the current network policy. Restore that
tool access before resuming the visual design workflow. No legal findings or AI
responses should be fabricated to make the prototype appear complete.
